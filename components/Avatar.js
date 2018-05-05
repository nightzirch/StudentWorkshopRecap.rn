import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;

const Avatar = ({
  imageUrl = 'https://placehold.it/200x200',
  name = 'Name Nameson'
}) => {
  return (
    <View style={styles.avatar}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }} />

      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: imageWidth/2
  },
  name: {
    textAlign: 'center'
  }
});

export default Avatar;