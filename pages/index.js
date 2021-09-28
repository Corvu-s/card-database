import Navbar from "../components/Navbar";
import CardView from "../components/CardView";
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
