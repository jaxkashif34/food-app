import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantFoodInfo from "../components/RestaurantFoodInfo";
import RestaurantOrder from "../components/RestaurantOrder";

const Restaurant = ({ route, navigation }) => {
  const { item, location } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHeader data={{ item, location }} navigation={navigation} />
      <RestaurantFoodInfo item={item} />
      <RestaurantOrder data={{ item, location }} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray2,
    flex: 1,
  },
});

export default Restaurant;
