// react
import { memo } from 'react';
// navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// icons
import { Ionicons } from '@expo/vector-icons';
import { AppScreens } from '../../utils/screen-types';
import HomeScreen from '../../screens/app/home-screen';
import ProfileScreen from '../../screens/app/profile-screen';
import colors from '../../utils/colors';

const BottomTab = createBottomTabNavigator<AppScreens>();

const TabBarIconHome = (props: { color: string; size: number }) => (
  <Ionicons name='home-outline' size={props.size} color={props.color} />
);
const TabBarIconCalendar = (props: { color: string; size: number }) => (
  <Ionicons name='calendar-outline' size={props.size} color={props.color} />
);
const TabBarIconMyUser = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='person-outline' size={size} color={color} />
);
const TabBarIconFeedbacks = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <Ionicons name='chatbox-outline' size={size} color={color} />;

const NavigationApp = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.appMain,
        }}
      >
        <BottomTab.Screen
          name='home'
          component={HomeScreen}
          options={{
            tabBarIcon: TabBarIconHome,
            tabBarLabel: 'Inicio',
          }}
        />

        <BottomTab.Screen
          name='profile'
          component={ProfileScreen}
          options={{
            tabBarIcon: TabBarIconMyUser,
            tabBarLabel: 'Mi perfil',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
