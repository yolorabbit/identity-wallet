import React, { FC } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native';
import { THEME } from '../../constants';

type Props = {
  children: any;
  styles?: any[];
}

const CommonScreen: FC<Props> = ({ styles = [], children }) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            paddingLeft: insets.left,
            paddingRight: insets.right,
            height: '100%',
            backgroundColor: THEME.COLORS.themeBg,
          }}
        >
          <View style={[...styles, { display: 'flex', flexDirection: 'column', height: '100%', position: 'relative'}]}>
            <StatusBar translucent backgroundColor='transparent' />
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CommonScreen;
