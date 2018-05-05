import React from 'react';
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Title from '../components/Title';
import Meta from '../components/Meta';
import Repos from '../components/Repos';

export default class ParticipantDetailsScreen extends React.Component {
  state = {
    participant: this.props.navigation.state.params.participant
  }

  render() {
    const participant = this.state.participant;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Title>Details</Title>

        <Meta
          imageUrl={participant.githubAccount.avatar_url}
          name={participant.githubName}
          location={participant.githubAccount.location}
          bio={participant.githubAccount.bio}
          email={participant.githubAccount.email}
          website={participant.githubAccount.blog}
        />

        <Title>Repositories</Title>
        <Repos repos={participant.githubAccount.repos} />
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
  }
});
