import Footer from "../../components/footer";
import Header from "../../components/header";
//import { getVideoCases } from "../../lib/getvideocasesbyid";
import { getEntry } from "../../lib/contentful";
//import { getAllIds } from "../../lib/getallids";
import PortfolioItem from "../../components/portfolioItem";
import Head from "next/head";

export default function PortfolioItemRoute({ cases, loaded }) {
  return (
    <div>
      <Head>
        <title>{cases.name} | CAMPUS Production</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"></link>
        <meta httpEquiv="content-language" content="ru"></meta>
        <meta
          property="og:title"
          content="Портфолио | CAMPUS Production"></meta>
        <meta property="og:url" content="Портфолио"></meta>
        <meta property="og:image" content={cases.photos[0]}></meta>
        <meta property="og:description" content={cases.description}></meta>
        <meta property="og:type" content="website" />
      </Head>
      <Header></Header>
      <PortfolioItem cases={cases} loaded={loaded}></PortfolioItem>
      <Footer></Footer>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const entry = await getEntry(params.id);

  let cases = entry;
  let loaded = false;

  console.log(cases.description);

  if (cases) {
    loaded = true;
  }
  console.log(cases);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      cases,
      loaded,
    },
  };
}
