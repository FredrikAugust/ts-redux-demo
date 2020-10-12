import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * READ THIS FILE BEFORE `counter.ts` to understand what happens in the
 * different parts of the store.
 */

/**
 * Actions define what we can do with the store.
 * There are two types of actions:
 * - "Empty actions": these have no accociated data, only the type. Can be useful for e.g. "reset state" as this doesn't need any extra information
 * - "Payload actions": contain extra data. E.g. if you want to set the search query to a specific string, you need to know two things:
 *   1. what we wish to do (type). e.g. "set_search_query"
 *   2. what we wish to set the search query to (payload). e.g. "fishing huts"
 *
 * Since we're using `createSlice`, we don't need to define these explicitly. They are defined as part of the slice.
 *
 * –––––––
 *
 * Slices define a part of the state management.
 * You can compose several of these to create a complete store.
 *
 * In our example, we will use two stores, to demonstrate composition of these.
 *
 * They contain three pieces of information;
 * 1. the name -- to make debugging simpler and the output prettier
 * 2. initialState -- what the default state of the store will be
 * 3. reducers -- _how_ will we alter the store state based on the actions. The key of the reducer object will be the available actions.
 */

const searchSlice = createSlice({
  name: "search",
  // We don't need to type the state, as it will be deduced from this parameter.
  // The result will be `type State = { name: string }`
  initialState: { name: "" },
  reducers: {
    // Here we are creating an "simple action" which has no extra information.
    clearQuery: (state) => ({
      /**
       * since the state only contains one property (name), we
       * don't need to merge the previous state into the new one, but it is
       * helpful to know that this is often necessary with more complex state
       * types
       */
      ...state,
      name: "",
    }),

    // Here we are defining a "payload action". We have to type the action using the `PayloadAction` and tell it what data we expect to get.
    setQuery: (state, action: PayloadAction<string>) => ({
      ...state,
      name: action.payload,
    }),
  },
});

// We can now get all the cool information from this slice that we want;

// These are automatically created, and are what we will use in the dispatch function later.
//   searchSlice.actions.setQuery('blabla')
//   searchSlice.actions.clearQuery();

// This is the reducer we will use when creating the final store.
//   searchSlice.reducer

export default searchSlice;
