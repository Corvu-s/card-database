import Navbar from "../components/Navbar";
import CardView from "../components/CardView";
import Filter from "../components/Filter";
import { useState, useEffect, useContext } from "react";
import { Context } from "../context/Store";

//state stuff
//https://medium.com/geekculture/how-to-use-context-usereducer-and-localstorage-in-next-js-cc7bc925d3f2

export default function Home({ data }) {
  const [state, dispatch] = useContext(Context); //important for global state
  let collectionData = [
    { name: "Dominaria", code: "DOM" },
    { name: "Guilds Of Ravnica", code: "GRN" },
    { name: "Ravnica Allegiance", code: "RNA" },
    { name: "War of the Spark", code: "WAR" },
    { name: "Throne of Eldraine", code: "ELD" },
  ];

  const [cards, setCards] = useState();

  async function getCards() {
    const res = await fetch(
      `https://api.magicthegathering.io/v1/cards?set=${state.set}`
    );
    const data = await res.json();
    //console.log(data);

    setCards(data);
    return data;
  }
  useEffect(() => {
    getCards();
  }, [state.set]);

  return (
    <div>
      <Navbar />

      <Filter sets={collectionData} />
      {cards == undefined ? <p>Loading Cards</p> : <CardView message={cards} />}
    </div>
  );
}

export async function getStaticProps({ context }) {
  // https://scryfall.com/docs/api/sets/all
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
