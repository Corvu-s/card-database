import Navbar from "../components/Navbar";
import CardView from "../components/CardView";
import cheerio from "cheerio";
import axios from "axios";
//https://www.section.io/engineering-education/google-drive-api-nodejs/
export default function Home({ data }) {
  //console.log(data);
  return (
    <div>
      <Navbar />
      <CardView message={data} />
    </div>
  );
}

export async function getStaticProps() {
  //https://en.wikipedia.org/wiki/List_of_Magic:_The_Gathering_sets
  const info = await axios.get(
    "https://en.wikipedia.org/wiki/List_of_Magic:_The_Gathering_sets"
  );

  const $ = cheerio.load(info);
  const title = $(".wikitable").text();
  const lastScraped = new Date().toISOString();
  console.log("Title" + title);
  console.log(lastScraped);
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
