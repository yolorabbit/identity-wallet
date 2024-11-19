import React, { FC, useState } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { CustomText } from '../../../components/common';
import { MoreScreenProps } from '../../../types/navigation';


const transparent = 'rgba(0,0,0,0.5)';
const PrivacyPolicy: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {


    return (
        <CommonScreen styles={[styles.signupContainer]}>
          <CommonHeader title='Privacy policy' />
          <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback>
              <View style={styles.body}>
                <View style={styles.txtContainer}>
                  <Text>
                  1. Information We Collect {"\n"} 
                    We collect personal information that you provide to us when using the Service, such as:

                    Personal Identification Information: Name, email address, phone number, etc.
                    Usage Data: Information about how you use the Service, including browsing activities, device information, and location data.
                    {"\n\n"} 
                  2. How We Use Your Information {"\n"} 
                    We use the collected information to:

                    Provide and improve the Service.
                    Respond to your inquiries or requests.
                    Send you updates, newsletters, and promotional content if you have opted in.
                    Comply with legal obligations and enforce our Terms and Conditions.
                    {"\n\n"} 
                  3. How We Share Your Information {"\n"} 
                    We do not sell your personal information to third parties. However, we may share your information with:

                    Service Providers: Third-party vendors who assist in the operation of the Service.
                    Legal Compliance: If required by law or in response to legal requests.
                    {"\n\n"} 
                  4. Data Security {"\n"} 
                    We implement reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                    {"\n\n"} 
                  5. Your Rights {"\n"} 
                    Depending on your location, you may have the right to:

                    Access and correct your personal information.
                    Request the deletion of your personal information.
                    Opt-out of marketing communications.
                    {"\n\n"} 
                  6. Cookies and Tracking Technologies {"\n"} 
                    We use cookies and similar tracking technologies to enhance your experience with the Service. You can manage your cookie preferences through your browser settings.
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
  

export default PrivacyPolicy;
