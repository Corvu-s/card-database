import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Store";

export default function Filter({ sets }) {
  const [state, dispatch] = useContext(Context); //important for global state
  const [selected, setSelected] = useState("");
  function handleSetSelection(e) {
    setSelected(e.target.value); //set the current value of the select form
    state.sets.map((item) => {
      //find the corrisponding name in state and get its set code
      if (item.name == e.target.value) {
        dispatch({ type: "SET_CHOICE", data: item.code });
      }
    });
  }
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="flex flex-wrap justify-center">
      <div className="inline-block relative w-64">
        <select
          value={selected}
          onChange={(e) => handleSetSelection(e)}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {sets.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
