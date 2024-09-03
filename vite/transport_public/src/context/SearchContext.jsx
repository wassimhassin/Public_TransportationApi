import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  depart : undefined,
  destination : undefined,
  working_hours : undefined
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
}; 

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        depart : state.depart,
        destination :state.destination,
        working_hours : state.working_hours,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};