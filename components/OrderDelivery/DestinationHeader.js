import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { useSelector } from "react-redux";
import { selectMapData } from "../../store/features";

export default function DestinationHeader({ location }) {
  const { duration } = useSelector(selectMapData);
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        top: 50,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: SIZES.width * 0.9,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding * 2,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}
      >
        <Image
          source={icons.red_pin}
          resizeMode="contain"
          style={{ marginRight: SIZES.padding, width: 30, height: 30 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.body3 }}>{location.streetName}</Text>
        </View>

        <Text style={{ ...FONTS.body3 }}>{Math.ceil(duration)}</Text>
      </View>
    </View>
  );
}
