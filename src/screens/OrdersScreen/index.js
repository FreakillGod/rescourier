import {Text, View, FlatList, useWindowDimensions} from 'react-native';
import React, {useRef, useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import orders from '../../assets/data/orders.json';
import OrderItem from '../../components/OrderItem';
import MapView, { Marker } from 'react-native-maps';

const OrdersScreen = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['12%', '95%'], []);
  const {width, height} = useWindowDimensions();

  return (
    <View style={{flex: 1, backgroundColor: 'lightblue'}}>
      <MapView style={{height, width}} showsUserLocation followUserLocation>
        {orders.map(order => (
          <Marker
            provider={PROVIDER_GOOGLE}
            key={order.id}
            title={order.Restaurant.name}
            description={order.Restaurant.address}
            coordinate={{
              latitude: order.Restaurant.lat,
              longitude: order.Restaurant.lng,
            }}>
            <Text style={{color: '#000'}}>BasketIcon</Text>
          </Marker>
        ))}
      </MapView>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              letterSpacing: 0.5,
              paddingBottom: 5,
              color: 'black',
            }}>
            You're Online
          </Text>
          <Text style={{letterSpacing: 0.5}}>
            Available Order: {orders.length}
          </Text>
        </View>
        <FlatList
          data={orders}
          renderItem={({item}) => <OrderItem order={item} />}
        />
      </BottomSheet>
    </View>
  );
};

export default OrdersScreen;
