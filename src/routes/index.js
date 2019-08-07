import { createStackNavigator, createAppContainer } from 'react-navigation';

import Preload from '../screens/PreloadScreen';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignupScreen';

const AppNavigator = createStackNavigator({
  preload: {
    screen: Preload
  },
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
});

const Routes = createAppContainer(AppNavigator);

export default Routes;
