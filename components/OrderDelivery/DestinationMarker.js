import { View, Text, Image } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectMapData } from "../../store/features";
import { COLORS, icons } from "../../constants";

export default function DestinationMarker({ data }) {
  const { item } = data;
  return (
    <Marker coordinate={item.location}>
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primary,
          }}
        >
          <Image
            source={icons.pin}
            style={{ width: 25, height: 25, tintColor: COLORS.white }}
          />
        </View>
      </View>
    </Marker>
  );
}

export const CarIcon = ({ location }) => {
  const { angle } = useSelector(selectMapData);
  return (
    <Marker
      coordinate={location.gps}
      anchor={{ x: 0.5, y: 0.5 }}
      flat={true}
      rotation={angle}
    >
      <Image source={icons.car} style={{ width: 40, height: 40 }} />
    </Marker>
  );
};
