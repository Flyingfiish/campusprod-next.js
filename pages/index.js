import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../components/home";
import { getVideoCases } from "./api/getvideocases";

export default function HomeRoute({ cases, loaded }) {
  return (
    <div>
      <Head>
        <title>Campusprod</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Home cases={cases} loaded={loaded}></Home>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts

  const res = await getVideoCases([
    "5f4f802368e6231368cf0b85",
    "5f4f802368e6231368cf0b7e",
    "5f4f802368e6231368cf0b8b",
  ]);

  let cases = [];
  let loaded = false;

  if (res) {
    cases = JSON.parse(res);
    loaded = true;
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      cases,
      loaded,
    },
  };
}
