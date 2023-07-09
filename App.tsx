import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import NavigationController from './src/navigation/navigation-controller';

export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/poppins-regular.ttf'),
    'poppins-semibold': require('./assets/fonts/poppins-semibold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationController />
    </Provider>
  );
}
