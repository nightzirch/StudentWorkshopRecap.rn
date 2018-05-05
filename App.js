import React from 'react';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import config from './config/config';

import HomeScreen from './screens/HomeScreen';
import ParticipantDetailsScreen from './screens/ParticipantDetailsScreen';
import ParticipantsScreen from './screens/ParticipantsScreen';

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Hjem'
    }
  }
});

const ParticipantsStack = StackNavigator({
  Participants: {
    screen: ParticipantsScreen,
    navigationOptions: {
      title: 'Deltakere'
    }
  },
  ParticipantDetails: { screen: ParticipantDetailsScreen }
});

export default TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'Home'
    }
  },
  Participants: {
    screen: ParticipantsStack,
    navigationOptions: {
      title: 'Participants'
    }
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;

      switch (routeName) {
        case 'Home': iconName = `ios-home${focused ? '' : '-outline'}`; break;
        case 'Participants': iconName = `ios-people${focused ? '' : '-outline'}`; break;
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
});