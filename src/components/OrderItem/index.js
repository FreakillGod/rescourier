import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OrderItem = ({order}) => {
  const {navigate} = useNavigation();

  return (
    <Pressable
      onPress={() => navigate('Delivery', {id: order.id})}
      style={{
        flexDirection: 'row',
        borderColor: '#3FC060',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
        minHeight: 135,
      }}>
      <Image
        source={{uri: order.Restaurant.image}}
        style={{
          width: '25%',
          height: '100%',
          borderBottomLeftRadius: 12,
          borderTopLeftRadius: 12,
        }}
      />
      <View style={{marginLeft: 10, flex: 1}}>
        <Text style={{fontWeight: '500', fontSize: 17, color: 'black'}}>
          {order.Restaurant.name}
        </Text>
        <Text style={{color: 'grey'}}>{order.Restaurant.address}</Text>
        <Text style={{fontSize: 18, marginTop: 5, color: 'black'}}>
          Delivery Details
        </Text>
        <Text style={{color: 'grey'}}>{order.User.name}</Text>
        <Text style={{color: 'grey'}}>{order.User.address}</Text>
      </View>
      <View
        style={{
          backgroundColor: '#3fc060',
          borderBottomRightRadius: 12,
          width: '10%',
          borderTopRightRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
        }}>
        <Text style={{marginLeft: 'auto', color: '#fff'}}>lo</Text>
      </View>
    </Pressable>
  );
};

export default OrderItem;
