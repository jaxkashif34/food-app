import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategoriesList,
  setSelectedCategory,
  selectCategory,
} from "../store/features";
export default function MainCategories() {
  const categories = useSelector(selectCategoriesList);
  return (
    <View style={{ padding: SIZES.padding * 2 }}>
      <Text style={{ ...FONTS.h1 }}>Main</Text>
      <Text style={{ ...FONTS.h1 }}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem item={item} />}
        horizontal
        keyExtractor={(item) => `${item.name}-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
      />
    </View>
  );
}

const CategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  return (
    <TouchableOpacity
      onPress={() => dispatch(setSelectedCategory(item))}
      style={{
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor:
          category?.id === item.id ? COLORS.primary : COLORS.white,
        borderRadius: SIZES.radius / 2,
        alignItems: "center",
        justifyContent: "center",
        marginRight: SIZES.padding,
        ...styles.shadow,
      }}
    >
      <View
        style={{
          width: 50,
          width: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            category?.id === item.id ? COLORS.white : COLORS.lightGray,
        }}
      >
        <Image
          source={item.icon}
          resizeMode="contain"
          style={{ width: 30, height: 30 }}
        />
      </View>
      <Text
        style={{
          marginTop: SIZES.padding,
          color: category?.id === item.id ? COLORS.white : COLORS.black,
          ...FONTS.body5,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
