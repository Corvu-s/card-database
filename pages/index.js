import Navbar from "../components/Navbar";
import CardView from "../components/CardView";
import Filter from "../components/Filter";
import { useState, useEffect, useContext } from "react";
import { Context } from "../context/Store";

//state stuff
//https://medium.com/geekculture/how-to-use-context-usereducer-and-localstorage-in-next-js-cc7bc925d3f2
import { useAppContext } from "../context/Store";

export default function Home({ data }) {
  const [state, dispatch] = useContext(Context); //important for global state
  let collectionData = [
    { name: "Dominaria", code: "DOM" },
    { name: "Guilds Of Ravnica", code: "GRN" },
    { name: "Ravnica Allegiance", code: "RNA" },
    { name: "War of the Spark", code: "WAR" },
    { name: "Throne of Eldraine", code: "ELD" },
  ];

  const [collectionNames, setCollection] = useState(collectionData);
  const [collectionChoice, setCollectionChoice] = useState(0);
  //console.log(data);

  //console.log(state);
  useEffect(() => {
    dispatch({ type: "SET_LOGGED_IN" });
    console.log(state);
  }, [collectionChoice]);
  return (
    <div>
      <Navbar />

      <Filter />
      <CardView message={data} />
    </div>
  );
}

export async function getStaticProps() {
  // https://en.wikipedia.org/wiki/List_of_Magic:_The_Gathering_sets

  const res = await fetch(`https://api.magicthegathering.io/v1/cards?set=KTK`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
