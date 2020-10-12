import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import counterSlice from "../Slices/counter";
import searchSlice from "../Slices/search";

/**
 * If we're drawing lines to IKEA furniture assembly, this is moving the furniture into your living room.
 *
 * Here we take the slices (which are self-contained managers of a part of the global state) and merge them into
 * one global object which handles _all_ state.
 */

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    counter: counterSlice.reducer,
  },
});

/**
 * Since we will later need to know the type of the global state, we will export it here to reduce
 * code duplication.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The same goes for dispatch, we wish to have a typed dispatch that is associated with our global store.
 */
export type RootDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<RootDispatch>();

export default store;
