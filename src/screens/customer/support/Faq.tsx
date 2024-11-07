import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { MoreScreenProps } from '../../../types/navigation';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { THEME } from '../../../constants';
import FaqCard from '../../../components/common/FaqCard';
import { CustomText } from '../../../components/common';

const Faq: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {

  // Dummy FAQ data
  const faqData = [
    { id: 1, title: 'What Is UIWallet?', description: 'UIWallet is digital wallet where advertisers and publishers get benefit.' },
  ];

  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='FAQs' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <ScrollView>
              <View style={styles.faqContainer}>
                <CustomText title='Frequently Asked Questions' size='bodyLarge' weight='bold' color='secondaryBtnText' classes={[{ marginBottom: 16 }]} />
                {/* Map through the FAQ data to render FAQ cards */}
                {faqData.map((faq) => (
                  <FaqCard
                    key={faq.id}
                    title={faq.title}
                    description={faq.description}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View style={styles.separator} />
    </CommonScreen >
  );
};

const styles = StyleSheet.create({
  storeDetailContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  body: {
    width: '100%',
    display: 'flex',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F8FE',
  },
  headerContainer: {
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.black50,
  },
  headText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: '38%',
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 16,
  },
  faqContainer: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  sectionText: {
    color: '#1B1B1B',
    marginTop: 16,
    marginHorizontal: 24,
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
});

export default Faq;
