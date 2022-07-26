import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import HomeHeader from "../components/Home/HomeHeader";
import MainCategories from "../components/Home/MainCategories";
import RestaurantList from "../components//Restaurant/RestaurantList";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <MainCategories />
      <RestaurantList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});

export default Home;
