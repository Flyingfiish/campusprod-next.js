import Footer from "../../components/footer";
import Header from "../../components/header";
import Portfolio from "../../components/portfolio";
import { findVideoCases } from "../api/findvideocases";

export default function PortfolioRoute({ cases, loaded, found }) {
  return (
    <div>
      <Header></Header>
      <Portfolio cases={cases} loaded={loaded} found={found}></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await findVideoCases();

  let cases = [];
  let loaded = false;
  let found = false;

  if (res) {
    cases = JSON.parse(res);
    loaded = true;
    found = true;
  }
  return {
    props: {
      cases,
      loaded,
      found,
    },
  };
}
