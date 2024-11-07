/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { Buffer } from 'buffer';

global.Buffer = global.Buffer || Buffer;
import RootNavigator from './navigators/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContextProvider } from './context/AppContext';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <RootNavigator />
      </AppContextProvider>
    </SafeAreaProvider>
  );
}

export default App;
