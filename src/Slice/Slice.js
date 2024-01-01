import { createSlice } from "@reduxjs/toolkit";
import json from "../data.json";

const Datas = json.mobiles;

const initialState = {
  filterData: undefined,
  reduxObject: undefined,
  lowTohigh: false,
  popularity: true,
  highTolow: false,
  isActive: false,
  addToCartObj: [],
  wishLists: [],
};

export const Slice = createSlice({
  name: "Specific-Items",
  initialState,
  reducers: {
    slicePassvalues: (state, action) => {
      state.filterData = Datas.find(
        (values) => values.mobileName === action.payload
      );
      state.reduxObject = undefined;
    },

    popularityval: (state, action) => {
      state.popularity = true;
      state.lowTohigh = false;
      state.highTolow = false;

      state.reduxObject = action.payload;
    },

    priceLowHigh: (state, action) => {
      state.lowTohigh = true;
      state.popularity = false;
      state.highTolow = false;

      state.reduxObject = state.filterData.mobileVarities
        .slice()
        .sort((a1, b1) => a1.price - b1.price);
    },

    priceHighLow: (state) => {
      state.highTolow = true;
      state.popularity = false;
      state.lowTohigh = false;

      state.reduxObject = state.filterData.mobileVarities
        .slice()
        .sort((a, b) => b.price - a.price);
    },

    filter4Star: (state) => {
      state.isActive = state.isActive ? false : true;

      let Datas = state.filterData;

      const _4star = Datas.mobileVarities.filter(
        (values) => values.ratingsStar >= 4
      );

      state.reduxObject = state.isActive
        ? _4star
        : state.filterData.mobileVarities;
    },

    filter3Star: (state) => {
      state.isActive = state.isActive ? false : true;

      const _3star = state.filterData.mobileVarities.filter(
        (values) => values.ratingsStar < 4
      );

      state.reduxObject = state.isActive
        ? _3star
        : state.filterData.mobileVarities;
    },

    filterFassured: (state) => {
      state.isActive = state.isActive ? false : true;

      const fAssured = state.filterData.mobileVarities.filter(
        (values) => values.flipkartAssure === true
      );

      state.reduxObject = state.isActive
        ? fAssured
        : state.filterData.mobileVarities;
    },

    filterRAMobjects: (state, action) => {
      state.isActive = state.isActive ? false : true;

      const RAM = state.filterData.mobileVarities.filter(
        (values) => values.RAM === action.payload
      );

      state.reduxObject = state.isActive
        ? RAM
        : state.filterData.mobileVarities;
    },

    filterROMobjects: (state, action) => {
      state.isActive = state.isActive ? false : true;

      const ROM = state.filterData.mobileVarities.filter(
        (values) => values.ROM === action.payload
      );

      state.reduxObject = state.isActive
        ? ROM
        : state.filterData.mobileVarities;
    },

    sliceCartGetObjects: (state, action) => {
      const Whole_Obj = Datas.find(
        (values) => values.mobileName === action.payload.mobileName
      );

      const final_Obj = Whole_Obj.mobileVarities.find(
        (values) =>
          values.name === action.payload.variant &&
          values.RAM === action.payload.RAM
      );

      state.addToCartObj.push({
        mobId: Date.now(),
        quantity: 1,
        securePackingFee: 69,
        ...final_Obj,
      });
    },

    increaseQuantity: (state, action) => {
      const itemindex = state.addToCartObj.findIndex(
        (values) => values.mobId === action.payload
      );

      if (itemindex !== -1) {
        state.addToCartObj[itemindex].quantity += 1;
      }
    },

    decreseQuantity: (state, action) => {
      const itemindex = state.addToCartObj.findIndex(
        (values) => values.mobId === action.payload
      );

      if (itemindex !== -1 && state.addToCartObj[itemindex].quantity > 1) {
        state.addToCartObj[itemindex].quantity -= 1;
      }
    },

    removeCartItem: (state, action) => {
      state.addToCartObj = state.addToCartObj.filter(
        (values) => values.mobId !== action.payload
      );
    },

    favouriteProduct: (state, action) => {
      let Whole_Obj = Datas.filter(
        (values) => values.mobileName === action.payload.mobileName
      );

      // const Whole_Ob = Whole_Obj[0].mobileVarities.map((values) => {
      //   if (values.name === action.payload.name) {
      //     values.heart = true;
      //   }
      //   return values;
      // });

      const final_Obj = Whole_Obj[0].mobileVarities.find(
        (values) => values.name === action.payload.name
      );

      state.wishLists.push({
        mobId: Date.now(),
        ...final_Obj,
      });
    },

    wishListsDeleteItem: (state, action) => {
      state.favourite = false;

      state.wishLists = state.wishLists.filter(
        (values) => values.mobId !== action.payload
      );
    },
  },
});

export const {
  priceLowHigh,
  popularityval,
  slicePassvalues,
  priceHighLow,
  filter4Star,
  filter3Star,
  filterFassured,
  filterRAMobjects,
  filterROMobjects,
  sliceCartGetObjects,
  increaseQuantity,
  decreseQuantity,
  removeCartItem,
  favouriteProduct,
  wishListsDeleteItem,
} = Slice.actions;

export default Slice.reducer;
