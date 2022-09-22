import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderDelivery from '../screens/OrderDelivery';
import OrdersScreen from '../screens/OrdersScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Order" component={OrdersScreen} />
      <Stack.Screen name="Delivery" component={OrderDelivery} />
    </Stack.Navigator>
  );
};

export default Navigation;
