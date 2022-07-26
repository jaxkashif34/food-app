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
  orderItemsList: [],
  orderItems: 1,
  mapData: {
    region: null,
    fromLocation: null,
    toLocation: null,
    duration: 0,
    isReady: false,
    angle: 0,
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectCategory = payload;
    },
    setDuration: (state, { payload }) => {
      state.mapData.duration = payload.duration;
    },
    calculateAngle: (state, { payload: { coordinates } }) => {
      const startLat = coordinates[0]["latitude"];
      const startLng = coordinates[0]["longitude"];
      const endLat = coordinates[1]["latitude"];
      const endLng = coordinates[1]["longitude"];
      const dx = endLat - startLat;
      const dy = endLng - startLng;
      state.mapData.angle = (Math.atan2(dy, dx) * 100) / Math.PI;
    },
    setFromLocation: (state, { payload: { nextLoc } }) => {
      state.mapData.fromLocation = nextLoc;
    },
    setIsReady: (state, { payload }) => {
      state.mapData.isReady = payload;
    },
    editOrder: (state, { payload }) => {
      if (payload.action === "add") {
        state.orderItems = state.orderItems + 1;
        if (state.orderItems === 10) {
          state.orderItems = 1;
        }
      } else {
        state.orderItems = state.orderItems - 1;
        if (state.orderItems === 0) {
          state.orderItems = 9;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSelectedCategory,
  editOrder,
  setDuration,
  calculateAngle,
  setFromLocation,
  setIsReady,
} = counterSlice.actions;

export const selectCurrentLocation = (state) => state.slice.currentLocation;
export const selectCategoriesList = (state) => state.slice.categoriesList;
export const selectCategory = (state) => state.slice.selectCategory;
export const selectRestautantList = (state) => state.slice.restaurantList;
export const selectOrderQty = (state) => state.slice.orderItems;
export const selectMapData = (state) => state.slice.mapData;

export default counterSlice.reducer;
