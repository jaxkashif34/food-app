import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import HomeHeader from "../components/HomeHeader";
import MainCategories from "../components/MainCategories";
import RestaurantList from "../components/RestaurantList";

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
