import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerNavigator from './DrawerNavigator';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Drawer: DrawerNavigator,
});

export default createAppContainer(TabNavigator);
