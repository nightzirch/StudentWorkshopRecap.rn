import React from 'react';
import { StyleSheet, Text} from 'react-native';

const Title = ({ children }) => {
  return (
    <Text style={styles.heading}>
      {children}
    </Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30
  }
});
