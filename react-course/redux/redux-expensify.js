import { configureStore, combineReducers, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: "SORT_BY_AMOUNT",
  startDate,
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE": {
      return [...state, action.expense]; // not push because pushing means mutating
      // concat and spread operator does not change the array
    }
    case "REMOVE_EXPENSE": {
      return state.filter(({ id }) => id !== action.id); // filter the matched id out
    }
    case "EDIT_EXPENSE": {
      return state.map((expense) => {
        // find the expense we're looking for
        if (expense.id === action.id) {
          return {
            ...expense, // grab all its existing properties
            ...action.updates, // overwrite the old values with the new ones.
          };
        } else {
          return expense;
        }
      });
    }
    default:
      return state;
  }
};

// Filters reducer

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_FILTER_TEXT": {
      return {
        ...state,
        text: action.text,
      };
    }
    case "SORT_BY_DATE": {
      return {
        ...state,
        sortBy: "date",
      };
    }
    case "SORT_BY_AMOUNT": {
      return {
        ...state,
        sortBy: "amount",
      };
    }
    case "SET_START_DATE": {
      return {
        ...state,
        startDate: action.startDate,
      };
    }
    case "SET_END_DATE": {
      return {
        ...state,
        endDate: action.endDate,
      };
    }
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;
    // case insensitive search
    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
};

const store = configureStore(
  combineReducers({
    expenses: expensesReducer, // expenses are being managed by expensesReducer {expenses: Array(0)}
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses); // show expenses based on filters

  console.log(store.getState()); // get current state every single time it changes.
  // this function gets called every single time the store changes.
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseOne.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent")); // rent

store.dispatch(sortByDate()); // date

store.dispatcH(sortByAmount()); // amount

store.dispatch(setStartDate(125)); // 125

store.dispatch(setStartDate()); // undefined

store.dispatch(setEndDate(100)); // 100

store.dispatch(setEndDate()); // undefined

const demoState = {
  // 1st piece of reducers
  expenses: [
    {
      id: "kljhkhljk",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  // 2nd piece of reducers
  filters: {
    text: "rent",
    sortBy: "amount", // e.g. date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

// Spreading Objects
const user = {
  name: "Jen",
  age: 24,
};

console.log({
  ...user, // { name: 'Jen', age: 24 }
});

console.log({
  ...user,
  location: "Philadelphia", // { name: 'Jen', age: 24, location: "Philadelphia" }
});

console.log({
  ...user,
  age: 27, // { name: 'Jen', age: 27, location: "Philadelphia" }
});
