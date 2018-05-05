import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  StyleSheet,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const MetaLine = ({ iconName, label }) => iconName && label ? (
  <View style={styles.metaContainer}>
    <Ionicons style={styles.icon} name={iconName} size={20} />
    <Text style={styles.label}>{label}</Text>
  </View>
) : null;

const Meta = ({ imageUrl = 'https://placehold.it/50x50', name, location, email, website, bio }) => {
  return (
    <View>
      <View style={styles.nameContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        {name && <Text style={styles.name}>{name}</Text>}
      </View>

      <MetaLine iconName="ios-person-outline" label={bio} />
      <MetaLine iconName="ios-map-outline" label={location} />
      <MetaLine iconName="ios-mail-outline" label={email} />
      <MetaLine iconName="ios-link-outline" label={website} />
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    marginLeft: 8
  },
  icon: {
    width: 20,
    textAlign: 'center'
  },
  label: {
    paddingHorizontal: 8
  }
});

export default Meta;