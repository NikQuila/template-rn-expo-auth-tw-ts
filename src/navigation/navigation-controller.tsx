import { Text, View } from 'react-native';
import useAuth from '../hooks/useAuth';
import NavigationAuth from './auth/navigation-auth';
import NavigationApp from './app/navigation-app';

const NavigationController = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Cargando... </Text>
      </View>
    );
  } else if (!user) {
    return <NavigationAuth />;
  } else {
    return <NavigationApp />;
  }
};

export default NavigationController;
