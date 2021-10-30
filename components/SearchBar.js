import { useState, useEffect, useContext } from "react";
import { Context } from "../context/Store";

export default function SearchBar() {
  const [state, dispatch] = useContext(Context); //important for global state
  const [search, setSearch] = useState("");
  const [autoCompleteOptions, setAutoCompleteOptions] = useState();
  async function getAutocomplete() {
    fetch(`https://api.scryfall.com/cards/autocomplete?q=${search}`)
      .then((res) => res.json())
      .then((ResponseData) => setAutoCompleteOptions(ResponseData.data));
  }

  function handleSelection(name) {
    console.log(name);
    setAutoCompleteOptions(); //make the list empty
  }
  useEffect(() => {
    getAutocomplete();
  }, [search]);
  useEffect(() => {
    //console.log(autoCompleteOptions);
  }, [autoCompleteOptions]);
  return (
    <div>
      <div className="shadow flex">
        <input
          className="w-full rounded p-2"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
          <i className="material-icons">search</i>
        </button>
      </div>
      {autoCompleteOptions == undefined ? (
        <></>
      ) : (
        autoCompleteOptions.map((name, index) => (
          <div
            key={index}
            className="rounded shadow-md my-2 relative pin-t pin-l"
          >
            <a className="y-10" onClick={() => handleSelection(name)}>
              {name}{" "}
            </a>
          </div>
        ))
      )}
    </div>
  );
}
