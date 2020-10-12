import React from "react";
import { useSelector } from "react-redux";
import counterSlice from "./Slices/counter";
import searchSlice from "./Slices/search";
import { RootState, useAppDispatch } from "./Stores";

const App: React.FC = () => {
  // Now that we have created and injected everything, we can start retrieving the state and mutating it from the rest of the application.

  // Firstly, let's retrieve the dispatch function we created, and wire up some actions to some *fun* buttons.
  const dispatch = useAppDispatch();

  // Secondly, let's retrieve some parts of hte state which we might want to display;
  // The important thing here is to type the `state` parameter so typescript can figure out what we're retrieving!
  const searchQuery = useSelector((state: RootState) => state.search.name);

  const counterValue = useSelector((state: RootState) => state.counter.count);

  // The format for `useSelector` is to take a function which grabs a part of the state and returns it.
  // We could also extract more complex types, as following
  const searchQueryWithCount = useSelector(
    (state: RootState) => `${state.search.name} x${state.counter.count}`
  );

  // This is just a standard event handler for input form change events
  const onSearchQueryChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    // This is where the magic happens. We dispatch an action, which, as you might recall
    // we created in the slices. Thus we use the `searchSlice.actions` object to retrieve
    // the actions.

    // e.currentTarget.value is just the current content of the input field
    dispatch(searchSlice.actions.setQuery(e.currentTarget.value));
  };

  return (
    <div>
      <h1>Search query: {searchQuery}</h1>
      <input
        type="text"
        value={searchQuery}
        placeholder="Enter some fun content"
        onChange={onSearchQueryChange}
      />
      <button onClick={() => dispatch(searchSlice.actions.clearQuery())}>
        Clear search query
      </button>

      <hr />

      <h1>Counter: {counterValue}</h1>
      {/* Again, simple actions that simply dispatch an action */}
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        Decrement
      </button>

      <hr />
      <h1>Order: {searchQueryWithCount}</h1>
    </div>
  );
};

export default App;
