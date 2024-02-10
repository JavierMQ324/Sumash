import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const MenuItem = ({ image, description }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default MenuItem;
