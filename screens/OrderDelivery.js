import React from "react";
import { View, Text } from "react-native";
import Map from "../components/OrderDelivery/Map";
import DestinationHeader from "../components/OrderDelivery/DestinationHeader";
import DeliveryInfo from "../components/OrderDelivery/DeliveryInfo";
const OrderDelivery = ({ route: { params } }) => {
  const { location, item } = params;
  return (
    <View style={{ flex: 1 }}>
      <Map data={{ item, location }} />
      <DestinationHeader location={location} />
      <DeliveryInfo item={item} />
    </View>
  );
};

export default OrderDelivery;
