import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from './pages/Main';
import Product from './pages/Product';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home: createStackNavigator(
        {
          Main,
          Product,
        },
        {
          defaultNavigationOptions: {
            header: null,
          },
        },
      ),
      Cart,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;

          let iconName;
          if (routeName === 'Home') {
            iconName = 'home';
          } else if (routeName === 'Cart') {
            iconName = 'shopping-cart';
          }

          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: 'lightcoral',
        inactiveTintColor: 'grey',
      },
    },
  ),
);

export default Routes;
