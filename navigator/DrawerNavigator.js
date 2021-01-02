import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import UserScreen from '../screens/UserScreen';
import AnimationsScreen from '../screens/AnimationsScreen';
import Animations2Screen from '../screens/Animations2Screen';

const DrawerNavigator = createDrawerNavigator(
  {
    Animations2: Animations2Screen,
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
