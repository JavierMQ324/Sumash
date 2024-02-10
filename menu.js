import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importa los iconos de MaterialIcons

const MenuItem = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const MenuScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  const menuItems = [
    { id: 1, image: require('./assets/juego1.jpeg') },
    { id: 2, image: require('./assets/juego2.jpeg') },
    { id: 3, image: require('./assets/juego3.jpeg') },
    { id: 4, image: require('./assets/juego4.jpeg') },
    { id: 5, image: require('./assets/juego5.jpeg') },
    { id: 6, image: require('./assets/juego6.jpeg') },
    { id: 7, image: require('./assets/juego7.jpeg') },
    { id: 8, image: require('./assets/juego8.jpeg') },
    { id: 9, image: require('./assets/juego9.jpeg') },
    { id: 10, image: require('./assets/juego10.jpeg') },
    
  ];

  
  const handleSearch = (text) => {
    setSearchText(text);
    const filteredItems = menuItems.filter(item =>
      item.description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMenuItems(filteredItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            value={searchText}
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.configButton} onPress={() => console.log('Configuración')}>
            <MaterialIcons name="settings" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={searchText ? filteredMenuItems : menuItems}
        renderItem={({ item }) => <MenuItem image={item.image} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
    flex: 1,
  },
  configButton: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default MenuScreen;
