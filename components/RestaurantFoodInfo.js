import { View, Text, Animated, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { editOrder, selectOrderQty } from "../store/features";

export const scrollX = new Animated.Value(0);
export default function RestaurantFoodInfo({ item }) {
  const dispatch = useDispatch();
  const orderQty = useSelector(selectOrderQty);
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    >
      {item?.menu?.map((item, index) => (
        <View key={`${item}-${index}`} style={{ alignItems: "center" }}>
          <View style={{ height: SIZES.height * 0.35 }}>
            {/* food Image */}
            <Image
              source={item.photo}
              style={{ width: SIZES.width, height: "100%" }}
            />
            {/* Quality */}
            <View
              style={{
                position: "absolute",
                bottom: -20,
                width: SIZES.width,
                height: 50,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}
                onPress={() => dispatch(editOrder({ price: item.price }))}
              >
                <Text style={{ ...FONTS.body1 }}>-</Text>
              </TouchableOpacity>

              <View
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ ...FONTS.h2 }}>{orderQty}</Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}
                onPress={() => dispatch(editOrder({ action: "add" }))}
              >
                <Text style={{ ...FONTS.body1 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* name and description */}

          <View
            style={{
              width: SIZES.width,
              alignItems: "center",
              marginTop: 15,
              paddingHorizontal: SIZES.padding * 2,
            }}
          >
            <Text
              style={{ marginVertical: 10, textAlign: "center", ...FONTS.h2 }}
            >
              {item.name} - {item.price.toFixed(2)}
            </Text>
            <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
          </View>

          {/* calories */}

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Image
              source={icons.fire}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
              {item.calories.toFixed(2)} cal
            </Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
}
