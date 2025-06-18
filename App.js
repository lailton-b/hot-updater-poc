import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import StoreScreen from './src/screens/StoreScreen';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen';
import {CartProvider} from './src/context/CartContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Pizza Stores'}}
          />
          <Stack.Screen
            name="Store"
            component={StoreScreen}
            options={({route}) => ({title: route.params.store.name})}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={({route}) => ({title: route.params.product.name})}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{title: 'Your Cart'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
