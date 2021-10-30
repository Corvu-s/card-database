import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

async function thing() {
  const res = await fetch(`https://api.magicthegathering.io/v1/cards?set=DOM`);
  const data = await res.json();
  return data.cards;
}

const initialState = {
  sets: [
    { name: "Dominaria", code: "DOM" },
    { name: "Guilds Of Ravnica", code: "GRN" },
    { name: "Ravnica Allegiance", code: "RNA" },
    { name: "War of the Spark", code: "WAR" },
    { name: "Throne of Eldraine", code: "ELD" },
    {name:"Theros Beyond Death",code:"THB",},
    {name:"Ikoria: Lair of Behemoths",code:"IKO"},
    {name:"Zendikar Rising",code:"ZNR"},
    {name:"Kaldheim",code:"KHM"},
    {name:"Strixhaven: School of Mages",code:"STX"},
    
  ],
  selectedCard:{},
  isLoggedIn: false,
  set: "DOM",
  cardType: "",
  cards: "thing()",
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
