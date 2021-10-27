import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  sets: [
    { name: "Dominaria", code: "DOM" },
    { name: "Guilds Of Ravnica", code: "GRN" },
    { name: "Ravnica Allegiance", code: "RNA" },
    { name: "War of the Spark", code: "WAR" },
    { name: "Throne of Eldraine", code: "ELD" },
  ],
  isLoggedIn: false,
  set: "DOM",
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
