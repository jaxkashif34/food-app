import { createSlice } from "@reduxjs/toolkit";
import { categoryData, restaurantData } from "../dummy";
const initialState = {
  currentLocation: {
    streetName: "Kuching",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  },
  categoriesList: categoryData,
  selectCategory: null,
  restaurantList: restaurantData,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectCategory = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedCategory } = counterSlice.actions;

export const selectCurrentLocation = (state) => state.slice.currentLocation;
export const selectCategoriesList = (state) => state.slice.categoriesList;
export const selectCategory = (state) => state.slice.selectCategory;
export const selectRestautantList = (state) => state.slice.restaurantList;

export default counterSlice.reducer;
