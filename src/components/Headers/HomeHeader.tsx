import React, { FC, useEffect, useState } from 'react';
import BasicHeader from '../common/BasicHeader';
import { Modal, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import CustomText from '../common/CustomText';
import CustomImage from '../common/CustomImage';
import { ICONS, THEME } from '../../constants';
import useAppData from '../../hooks/useAppData';
import { TYPES } from '../../types';
import { useNavigation } from '@react-navigation/native';
import CommonStyle from '../../styles/common';
import CommonScreen from '../template/CommonScreen';
import NotificationCard from '../common/NotificationCard';
import { AppService } from '../../services';

type Props = {
  title: 'Dashboard' | 'ShowingDate' | 'NewShowingDate' | 'Profile' | 'More';
  enableSarch?: boolean;
  classes?: any[];
}

const HomeHeader: FC<Props> = ({ title, enableSarch = false, classes = [] }) => {
  const navigation = useNavigation();
  const { user, notifications, updateNotifications } = useAppData();

  const [showModal, setShowModal] = useState(false);
  const [eventList, setEventList] = useState<TYPES.INotification[]>([]);
  const [newNotification, setNewNotification] = useState<boolean>(true);

  useEffect(() => {
    if (notifications.length > 0 && !notifications[notifications.length - 1].status) {
      setNewNotification(true);
    } else {
      setNewNotification(false);
    }

    setEventList(notifications);
  }, [notifications])

  const handleOpenNotifications = async () => {
    setShowModal(true);
    try {
      if (eventList.length > 0) {
        const res = await AppService.updateNotification(eventList[eventList.length - 1].id??'')
        updateNotifications(res);
      }
      setNewNotification(false)
    } catch (error) {
      console.log("error:::", error);
    }
  }

  const handleOpenAppointment = (appointmentId: string) => {
    // @ts-ignore
    navigation.navigate('Detail', { id: appointmentId })
  }

  return (
    <BasicHeader>
      <View style={[styles.container, ...classes]}>
        {title === 'Dashboard' || title === 'NewShowingDate' ?
          <CustomImage
            width={88}
            height={33}
            source={ICONS.logoHeader}
          />
          :
          <CustomText size='title' weight='bold' title={title} />
        }

        <View style={styles.rightSection}>
          {/* {enableSarch &&
            <TouchableOpacity
              style={[CommonStyle.center, styles.search]}
              onPress={() => handleSearch()}
            >
              <CustomImage
                width={20}
                height={20}
                source={ICONS.search}
              />
            </TouchableOpacity>
          } */}
          <TouchableOpacity
            style={[CommonStyle.center, styles.notification]}
            onPress={() => handleOpenNotifications()}
          >
            <CustomImage source={ICONS.ring} />
            {newNotification &&
              <View style={styles.active} />
            }
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType='slide'
        transparent={false}
        visible={showModal}
        presentationStyle={"fullScreen"}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <CommonScreen styles={[styles.modalContainer]}>
          <BasicHeader classes={[{ marginTop: 28, marginBottom: 28, }]}>
            <View style={[CommonStyle.rowBetween, CommonStyle.widthFull]}>
              <CustomText title='Notifications' size='title' weight='bold' />
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <CustomImage
                  source={ICONS.closeRound}
                  width={28} height={28}
                />
              </TouchableOpacity>
            </View>
          </BasicHeader>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback>
              <View>
                {eventList.length > 0 && eventList.map((item, index) => (
                  <NotificationCard
                    key={index}
                    data={item}
                    onAction={handleOpenAppointment}
                  />
                ))}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </CommonScreen>
      </Modal>
    </BasicHeader>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    backgroundColor: THEME.COLORS.bgIconGray,
    borderRadius: THEME.BORDER_RADIUS.full,
    width: 38,
    height: 38,
  },
  notification: {
    position: 'relative',
    width: 38,
    height: 38,
    borderWidth: 1,
    borderColor: THEME.COLORS.borderGray,
    borderRadius: THEME.BORDER_RADIUS.full,
    marginLeft: 20,
  },
  active: {
    width: 7,
    height: 7,
    borderRadius: THEME.BORDER_RADIUS.full,
    backgroundColor: THEME.COLORS.green,
    position: 'absolute',
    top: 9,
    right: 9,
  },
  modalContainer: {
    paddingHorizontal: 16
  }
});
