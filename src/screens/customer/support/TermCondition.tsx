import React, { FC, useState } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { CustomText } from '../../../components/common';
import { MoreScreenProps } from '../../../types/navigation';


const transparent = 'rgba(0,0,0,0.5)';
const TermCondition: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {


  return (
    <CommonScreen styles={[styles.signupContainer]}>
      <CommonHeader title='Terms & Conditions' />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.txtContainer}>
              <Text>
              1. Acceptance of Terms {"\n"} 
                By using or accessing the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as any other policies or guidelines provided by Ultimate Identity.

              {"\n\n"} 
              2. Changes to Terms {"\n"} 
                We may update or modify these Terms at any time. If we make significant changes, we will notify you through the Service or by other means. Your continued use of the Service after such changes constitutes your acceptance of the updated Terms.

              {"\n\n"} 
              3. User Accounts {"\n"} 
                To use certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update your information as necessary. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.

              {"\n\n"} 
              4. Prohibited Use {"\n"} 
                You agree not to:

                Use the Service for any illegal, harmful, or malicious purposes.
                Violate any applicable laws, regulations, or third-party rights.
                Engage in fraudulent activity or misuse your account.
                Distribute malicious code, viruses, or other harmful software through the Service.
              {"\n\n"} 
              5. Intellectual Property {"\n"} 
              All intellectual property rights related to the Service, including logos, trademarks, software, and content, are owned by Ultimate Identity or its licensors. You may not copy, modify, or distribute any of our intellectual property without permission.

              {"\n\n"} 
              6. Disclaimers {"\n"} 
              The Service is provided "as is" and "as available," without any warranties or representations of any kind. We do not guarantee that the Service will be uninterrupted or error-free, and we disclaim any liability for damages arising from the use of the Service.

              {"\n\n"} 
              7. Limitation of Liability {"\n"} 
              To the maximum extent permitted by law, Ultimate Identity will not be liable for any indirect, incidental, special, or consequential damages, including loss of data, profits, or business opportunities, arising from your use of the Service.

              {"\n\n"} 
              8. Termination {"\n"} 
              We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, for any reason, including if you violate these Terms.'
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </CommonScreen >
  );
};


const styles = StyleSheet.create({
    signupContainer: {
      alignItems: 'flex-start',
      width: '100%',
      paddingHorizontal: 24,
    },
    body: {
      width: '100%',
      marginBottom: 100,
      display: 'flex',
    },
    container: {
      flex: 1,
      backgroundColor: '#F5F8FE',
    },
    txtContainer: {
      marginTop: 0,
      marginBottom: 24,
    },
  });
  

export default TermCondition;
