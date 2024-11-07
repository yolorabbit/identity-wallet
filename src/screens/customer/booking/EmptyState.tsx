import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import CustomImage from '../../../components/common/CustomImage';
import { ICONS } from '../../../constants';


const EmptyState = ({days}: any) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.iconContainer}>
            <CustomImage source={ICONS.calendarEmptyIcon} width={51} height={56} />
        </View>
      <Text style={styles.txtInfo}>No bookings have been completed in the last {days} days.</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: '#FFF',
        height: 136,
        width: 136,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtInfo: {
        color: '#515151',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 16,
        fontFamily: 'OpenSans-Regular',
        width: 283,
    }
});

export default EmptyState