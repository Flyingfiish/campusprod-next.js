import Footer from "../../components/footer";
import Header from "../../components/header";
import { getVideoCases } from "../api/getvideocases";
import { getAllIds } from "../api/findvideocases";
import PortfolioItem from "../../components/portfolioItem";

export default function PortfolioItemRoute({ cases, loaded }) {
  return (
    <div>
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
