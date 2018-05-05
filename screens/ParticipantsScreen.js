import React from 'react';
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import config from '../config/config';

import Avatar from '../components/Avatar';
import Title from '../components/Title';

export default class ParticipantsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      participants: []
    }
  }

  componentWillMount() {
    return fetch(config.GetParticipantsUrl())
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoading: false,
          participants: res
        })
      });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Title>
          Participants
        </Title>

        <FlatList
          data={this.state.participants}
          keyExtractor={(item, index) => index}
          numColumns={3}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ParticipantDetails', {
              participant: item
            })}>
              <Avatar
                imageUrl={item.githubAccount.avatar_url}
                name={item.githubName}
              />
            </TouchableOpacity>
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  image: {
    width: 200,
    height: 200
  }
});
