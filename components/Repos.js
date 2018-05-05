import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

const RepoItem = ({name}) => (
  <View style={styles.listView}>
    <Text style={styles.listText}>{name}</Text>
  </View>
);

const Repos = ({
  repos
}) => {
  return (
    <FlatList
      data={repos}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) =>
        <RepoItem name={item.name} />
      }
    />
  );
}

const styles = StyleSheet.create({
  listView: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 8
  },
  listText: {
    fontSize: 16
  }
});

export default Repos;