import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreens } from '../../utils/screen-types';
import LoginScreen from '../../screens/auth/login-screen';
import ResetPasswordScreen from '../../screens/auth/reset-password';
import RegisterScreen from '../../screens/auth/register-screen';

const Stack = createStackNavigator<AuthScreens>();

const NavigationAuth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'login'} component={LoginScreen} />
        <Stack.Screen name={'register'} component={RegisterScreen} />
        <Stack.Screen name={'resetPassword'} component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationAuth;
