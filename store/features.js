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
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectCategory = payload;
    },
    // editOrder: (state, { payload: { id, price, action } }) => {
    //   const orderList = [...state.orderItemsList];
    //   const item = orderList.find((item) => item?.id === id);
    //   if (action === "add") {
    //     if (item) {
    //       const newQty = item?.qty + 1;
    //       item.qty = newQty;
    //       item.total = item?.qty * price;
    //     } else {
    //       const newItem = {
    //         menuId: id,
    //         qty: 1,
    //         price,
    //         total: price,
    //       };
    //       orderList.push(newItem);
    //     }
    //     state.orderItemsList = orderList;
    //   } else {
    //     if (item) {
    //       if (item?.qty > 0) {
    //         const newQty = item?.qty - 1;
    //         item.qty = newQty;
    //         item.total = newQty * price;
    //       }
    //     }
    //     state.orderItemsList = orderList;
    //   }
    // },

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
export const { setSelectedCategory, editOrder } = counterSlice.actions;

export const selectCurrentLocation = (state) => state.slice.currentLocation;
export const selectCategoriesList = (state) => state.slice.categoriesList;
export const selectCategory = (state) => state.slice.selectCategory;
export const selectRestautantList = (state) => state.slice.restaurantList;
export const selectOrderQty = (state) => state.slice.orderItems;

export default counterSlice.reducer;
