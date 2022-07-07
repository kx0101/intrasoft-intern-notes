import { configureStore } from "redux";

// Action generators - functions that return action objects

// default value is an empty object
// if there is an object provided and it doesn't include incrementBy it will get the default value of 1
// if there is NO object provided the default will be an empty object (state.count + {} = state.count)
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

// Reducers
// 1. Reducers are pure functions - pure function is a function that always returns the same result if the same arguments are passed
//// and they also do not interact or rely with any variables
// 2. Never change state or action, NO MUTATION
//// You don't want to mutate a state because in react,
//// performance often is about avoiding unnecessary re-rendering of  your app.
//// React compares the next state of your app with the current state,
//// if the states differ: re-render. Otherwise don't
// 3. When a dispatch happens it goes through all reducers and checks the for an action.type match.

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
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
};

const store = configureStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState()); // get current state every single time it changes.
}); // this function gets called every single time the store changes.

// Actions - an object that gets sent to the store

// walk, stop_walking, sit, work, stop_working etc. (actions change the state)

// I'd like to increment the count twice
store.dispatch({
  type: "INCREMENT",
});

store.dispatch(incrementCount({ incrementBy: 5 }));

unsubscribe(); // the following dispatches won't happen

// I'd like to decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }));

// I'd like to reset the count to zero
store.dispatch(resetCount());

// I'd like to set the count
store.dispatch(setCount({ count: 101 }));
