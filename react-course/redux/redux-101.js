import { configureStore } from "redux";

const store = configureStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1, // count++
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        // count: state.count - 1, // count--
        count: state.count - decrementBy,
      };
    case "SET":
      return {
        count: action.count, // count = 100
      };
    case "RESET":
      return {
        count: 0, // reset
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState()); // get current state every single time it changes.
}); // this function gets called every single time the store changes.

// Actions - an object that gets sent to the store

// walk, stop_walking, sit, work, stop_working etc. (actions change the state)

// I'd like to increment the count twice
store.dispatch({
  type: "INCREMENT",
});

unsubscribe(); // the following dispatches won't happen

store.dispatch({
  type: "INCREMENT",
});

// I'd like to decrement the count
store.dispatch({
  type: "DECREMENT",
  decrementBy: 3,
});

// I'd like to reset the count to zero
store.dispatch({
  type: "RESET",
});

// I'd like to set the count
store.dispatch({
  type: "SET",
  count: 101,
});
