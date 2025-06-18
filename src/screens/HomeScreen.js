import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {stores} from '../data/mockData';
import {useCart} from '../context/CartContext';
import {version} from '../../package.json';

const HomeScreen = ({navigation}) => {
  const {getTotalItems} = useCart();

  const renderStore = ({item}) => (
    <TouchableOpacity
      style={styles.storeCard}
      onPress={() => navigation.navigate('Store', {store: item})}>
      <Image source={{uri: item.image}} style={styles.storeImage} />
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeDescription}>{item.description}</Text>
        <View style={styles.storeDetails}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
          <Text style={styles.deliveryFee}>${item.deliveryFee} delivery</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Choose a Store</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.cartButtonText}>Cart ({getTotalItems()})</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/img/purple-square.png')}
        style={{width: 100, height: 100, alignSelf: 'center', marginTop: 16}}
        resizeMode="cover"
      />

      <Text style={{alignSelf: 'center', marginTop: 10}}>{version}</Text>

      <FlatList
        data={stores}
        renderItem={renderStore}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cartButton: {
    backgroundColor: '#ff6b35',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cartButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  listContainer: {
    padding: 15,
  },
  storeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  storeImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  storeInfo: {
    padding: 15,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  storeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  storeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#333',
  },
  deliveryTime: {
    fontSize: 14,
    color: '#666',
  },
  deliveryFee: {
    fontSize: 14,
    color: '#ff6b35',
    fontWeight: '600',
  },
});

export default HomeScreen;
