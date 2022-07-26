import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { selectRestautantList } from "../../store/features";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCurrentLocation } from "../../store/features";
import { styles } from "../Home/MainCategories";

export default function RestaurantList() {
  const restaurantList = useSelector(selectRestautantList);

  return (
    <FlatList
      data={restaurantList}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      keyExtractor={(item) => `${item.name}-${item.id}`}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 60,
      }}
    />
  );
}

const RestaurantItem = ({ item }) => {
  const navigation = useNavigation();
  const location = useSelector(selectCurrentLocation);
  return (
    <TouchableOpacity
      style={{ marginBottom: SIZES.padding * 2 }}
      onPress={() => navigation.navigate("Restaurant", { item, location })}
    >
      {/* image */}
      <View>
        <Image
          source={item.photo}
          resizeMode="cover"
          style={{ width: "100%", height: 200, borderRadius: SIZES.radius }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: COLORS.white,
            height: 50,
            width: SIZES.width * 0.3,
            borderTopRightRadius: SIZES.radius,
            borderTopLeftRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
        </View>
      </View>

      {/* Restaurant info */}
      <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

      <View style={{ marginTop: SIZES.padding, flexDirection: "row" }}>
        {/* rating */}
        <Image
          source={icons.star}
          resizeMode="contain"
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.primary,
            marginRight: 10,
          }}
        />
        <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
        {/* categories */}
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          {/* pricing */}
          {[1, 2, 3].map((price, i) => (
            <Text
              key={i}
              style={{
                ...FONTS.body3,
                color:
                  price <= item.priceRating ? COLORS.black : COLORS.darkgray,
              }}
            >
              $
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};
