import Navbar from "../components/Navbar";
import CardView from "../components/CardView";
import Filter from "../components/Filter";
import { useState, useEffect, useContext } from "react";
import { Context } from "../context/Store";
import Link from "next/link";
//state stuff
//https://medium.com/geekculture/how-to-use-context-usereducer-and-localstorage-in-next-js-cc7bc925d3f2

//api docs
//https://docs.magicthegathering.io/
export default function Home({ data }) {
  const [state, dispatch] = useContext(Context); //important for global state

  return (
    <div>
      <Navbar />
      <div>
        <Filter sets={state.sets} />
        <CardView />
      </div>
    </div>
  );
}

// export async function getStaticProps({ context }) {
//   // https://scryfall.com/docs/api/sets/all
//   const res = await fetch(`https://api.magicthegathering.io/v1/cards?set=KTK`);
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
