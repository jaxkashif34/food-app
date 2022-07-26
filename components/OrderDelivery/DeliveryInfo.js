import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

export default function DeliveryInfo({ item }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 50,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: SIZES.width * 0.9,
          paddingVertical: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding * 2,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* Avatar */}
          <Image
            source={item?.courier?.avatar}
            resizeMode="contain"
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          {/* Name and Rating */}
          <View style={{ flex: 1, marginLeft: SIZES.padding }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ ...FONTS.h4 }}>{item?.courier?.name}</Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.star}
                  style={{
                    width: 18,
                    height: 18,
                    tintColor: COLORS.primary,
                    marginRight: SIZES.padding,
                  }}
                />
                <Text style={{ ...FONTS.body3 }}>{item?.rating}</Text>
              </View>
            </View>

            {/* Restaurant name */}
            <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>
              {item?.name}
            </Text>
          </View>
        </View>

        {/* Button */}

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding * 2,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              height: 50,
              marginRight: 10,
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ ...FONTS.h4, color: COLORS.white }}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              height: 50,
              backgroundColor: COLORS.secondary,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => console.log(navigation.goBack())}
          >
            <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
