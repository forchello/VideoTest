import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createModalStack, ModalProvider } from 'react-native-modalfy';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VideoTestModal from 'src/components/modals/VideoTestModal';
import HomeScreen from 'src/screens/HomeScreen';

const modalConfig = {
  VideoTestModal: {
    modal: VideoTestModal,
    backdropAnimationDuration: 0,
  },
};
const defaultOptions = { backdropOpacity: 0.6 };

const stack = createModalStack(modalConfig, defaultOptions);

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ModalProvider stack={stack}>
        <Navigation />
      </ModalProvider>
    </GestureHandlerRootView>
  );
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
