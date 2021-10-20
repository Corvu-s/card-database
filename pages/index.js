import Navbar from "../components/Navbar";
import CardView from "../components/CardView";
import Filter from "../components/Filter"
import {useState} from 'react'

//https://www.section.io/engineering-education/google-drive-api-nodejs/
export default function Home({ data }) {
  let collectionData = [{name:"Dominaria",code:"DOM",},{name:"Guilds Of Ravnica",code:"GRN"},{name:"Ravnica Allegiance",code:"RNA"},{name:"War of the Spark",code:"WAR"},{name:"Throne of Eldraine",code:"ELD"}]

  const [collectionNames,setCollection] = useState(collectionData)
  const [collectionChoice,setCollectionChoice]=useState("");
  //console.log(data);
  return (
    <div>
      <Navbar />
      <Filter/>
      <CardView message={data} />
    </div>
  );
}

export async function getStaticProps() {
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
