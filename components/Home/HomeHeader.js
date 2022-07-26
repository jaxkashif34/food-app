import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons, SIZES, FONTS, COLORS } from "../../constants";
import { useSelector } from "react-redux";
import { selectCurrentLocation } from "../../store/features";

export default function HomeHeader() {
  const { streetName } = useSelector(selectCurrentLocation);
  return (
    <View style={{ flexDirection: "row", height: 50 }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.nearby}
          style={{ width: 30, width: 30 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "70%",
            height: "100%",
            backgroundColor: COLORS.lightGray3,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.radius,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>{streetName}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.basket}
          style={{ width: 30, width: 30 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
