import {
  Text,
  View,
  FlatList,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import React, {useRef, useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles';

import orders from '../../assets/data/orders.json';
const order = orders[0];
const user = {
  address: 'mumbai',
};
const dishes = [
  {id:1,
    Dish: {
      name: 'panner',
    },
    quantity: 2,
  },
  {id:2,
    Dish: {
      name: 'panner',
    },
    quantity: 3,
  },
];
const totalKm = 3;

const OrderDelivery = () => {
  const snapPoints = useMemo(() => ['12%', '95%'], []);
  const bottomSheetRef = useRef(null);
  const {width, height} = useWindowDimensions();
  const isDriverClose = totalKm <= 1; // decrease for higher accuracy

  const onButtonPressed = async () => {
    const status = 'ACCEPTED';
    // const { status } = order;
    if (status === 'READY_FOR_PICKUP') {
      bottomSheetRef.current?.collapse();
      //   await acceptOrder();
      onAccepted();
    } else if (status === 'ACCEPTED') {
      bottomSheetRef.current?.collapse();
      //   await pickUpOrder();
    } else if (status === 'PICKED_UP') {
      //   await completeOrder();
      bottomSheetRef.current?.collapse();
      //   navigation.goBack();
    }
  };

  const isButtonDisabled = () => {
    const status = 'ACCEPTED';

    // const { status } = order;
    if (status === 'READY_FOR_PICKUP') {
      return false;
    }
    if ((status === 'ACCEPTED' || status === 'PICKED_UP') && isDriverClose) {
      return false;
    }
    return true;
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={styles.handleIndicator}>
      <View style={styles.handleIndicatorContainer}>
        <Text style={styles.routeDetailsText}>
          {/* {totalMinutes.toFixed(0)} min */}
          22 min
        </Text>
        <Text>Icon/basket</Text>
        <Text style={styles.routeDetailsText}>5 km</Text>
      </View>

      <View style={styles.deliveryDetailsContainer}>
        <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
        <View style={styles.adressContainer}>
          {/* <Fontisto name="shopping-store" size={22} color="grey" /> */}
          <Text>Icon</Text>
          <Text style={styles.adressText}>{order.Restaurant.address}</Text>
        </View>
        <View style={styles.adressContainer}>
          {/* <FontAwesome5 name="map-marker-alt" size={30} color="grey" /> */}
          <Text>Icon</Text>
          <Text style={styles.adressText}>{user?.address}</Text>
        </View>
        <View style={styles.orderDetailsContainer}>
          {dishes?.map(dishItem => (
            <Text style={styles.orderItemText} key={dishItem.id}>
              {dishItem.Dish.name} x{dishItem.quantity}
            </Text>
          ))}
        </View>
      </View>

      <Pressable
        style={{
          ...styles.buttonContainer,
          backgroundColor: isButtonDisabled() ? 'grey' : '#3FC060',
        }}
        onPress={onButtonPressed}
        disabled={isButtonDisabled()}>
        <Text style={styles.buttonText}>{'ACCEP ORDER'}</Text>
      </Pressable>
    </BottomSheet>
  );
};

export default OrderDelivery;
