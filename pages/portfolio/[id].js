import Footer from "../../components/footer";
import Header from "../../components/header";
import {getVideoCases} from "../../lib/getvideocasesbyid";
import {getAllIds} from "../../lib/getallids";
import PortfolioItem from "../../components/portfolioItem";
import Head from "next/head";

export default function PortfolioItemRoute({ cases, loaded }) {
  return (
    <div>
      <Head>
        <title>{cases.name} | CAMPUS Production</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ru"></meta>
        <meta
          property="og:title"
          content="Портфолио | CAMPUS Production"
        ></meta>
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

export async function getStaticProps({ params }) {
  const res = await getVideoCases([params.id]);

  let cases = [];
  let loaded = false;

  if (res) {
    cases = JSON.parse(res)[0];
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

export async function getStaticPaths() {
  const res = await getAllIds();

  let paths = [];
  let loaded = false;

  if (res) {
    paths = JSON.parse(res);
    loaded = true;
  }

  return {
    paths: paths.map((item) => {
      return {
        params: { id: item._id },
      };
    }),
    fallback: false,
  };
}
