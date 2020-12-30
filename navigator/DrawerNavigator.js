import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import UserScreen from '../screens/UserScreen';
import AnimationsScreen from '../screens/AnimationsScreen';

const DrawerNavigator = createDrawerNavigator(
  {
    Animations: AnimationsScreen,
    User: UserScreen,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

export default createAppContainer(DrawerNavigator);
