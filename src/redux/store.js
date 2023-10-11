import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./reducers/modalsSlice";
import pageSlice from "./reducers/pageSlice";
import { pageApi } from "@api/pageApi";
import authSlice from "./reducers/authSlice";
import { authApi } from "@api/authApi";
import promoSlice from "./reducers/promoSlice";
import { promoApi } from "@api/promoApi";
import catalogSlice from "./reducers/catalogSlice";
import { catalogApi } from "@api/catalogApi";
import commentsSlice from "./reducers/commentsSlice";
import { commentsApi } from "@api/commentsApi";
import cartSlice from "./reducers/cartSlice";
import { cartApi } from "@api/cartApi";
import checkoutSlice from "./reducers/checkoutSlice";
import { checkoutApi } from "@api/checkoutApi";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
export const store = () =>
  configureStore({
    reducer: {
      modals: modalsSlice,
      page: pageSlice,
      auth: authSlice,
      promo: promoSlice,
      catalog: catalogSlice,
      comments: commentsSlice,
      cart: cartSlice,
      checkout: checkoutSlice,
      //api reducers

      [pageApi.reducerPath]: pageApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [promoApi.reducerPath]: promoApi.reducer,
      [catalogApi.reducerPath]: catalogApi.reducer,
      [commentsApi.reducerPath]: commentsApi.reducer,
      [cartApi.reducerPath]: cartApi.reducer,
      [checkoutApi.reducerPath]: checkoutApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        authApi.middleware,
        pageApi.middleware,
        promoApi.middleware,
        catalogApi.middleware,
        commentsApi.middleware,
        cartApi.middleware,
        checkoutApi.middleware,
      ]),
  });

/* const combinedReducer = combineReducers({
  modals: modalsSlice,
  page: pageSlice,
  auth: authSlice,
  promo: promoSlice,
  catalog: catalogSlice,
  comments: commentsSlice,
  cart: cartSlice,
  checkout: checkoutSlice,
  //api reducers

  [pageApi.reducerPath]: pageApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [promoApi.reducerPath]: promoApi.reducer,
  [catalogApi.reducerPath]: catalogApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [checkoutApi.reducerPath]: checkoutApi.reducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const store = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        authApi.middleware,
        pageApi.middleware,
        promoApi.middleware,
        catalogApi.middleware,
        commentsApi.middleware,
        cartApi.middleware,
        checkoutApi.middleware,
      ]),
  });
 */
export const wrapper = createWrapper(store, { debug: true });
