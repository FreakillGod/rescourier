import { Marker } from "react-native-maps";
import { View } from "react-native";

const CustomMarker = ({ data, type }) => {
  return (
    <Marker
      coordinate={{
        latitude: data.lat,
        longitude: data.lng,
      }}
      title={data.name}
      description={data.address}
    >
      <View style={{ backgroundColor: "green", padding: 5, borderRadius: 20 }}>
        {type === "RESTAURANT" ? (
          // <Entypo name="shop" size={30} color="white" />
          <Text>Shop</Text>
        ) : (
          // <MaterialIcons name="restaurant" size={30} color="white" />
          <Text>Restaurant</Text>
        )}
      </View>
    </Marker>
  );
};

export default CustomMarker;
