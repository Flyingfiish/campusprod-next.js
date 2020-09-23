import Footer from "../../components/footer";
import Header from "../../components/header";
import Portfolio from "../../components/portfolio";
import Head from "next/head";
import { findVideoCases } from "../../lib/findvideocases";

export default function PortfolioRoute({ cases, loaded, found }) {
  return (
    <div>
      <Head>
        <title>Портфолио | CAMPUS Production</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ru"></meta>
        <meta property="og:title" content="Портфолио | CAMPUS Production"></meta>
        <meta property="og:url" content="Портфолио"></meta>
        <meta property="og:image" content="main.jpg"></meta>
        <meta
          property="og:description"
          content="За 4 года было реализовано более 100 проектов: рекламные видео, музыкальные клипы, дизайны сайтов, оформление социальных сетей. Каждую задачу мы решаем осмысленно, и красиво. Для начала работы нам надо поговорить. Достаточно указать контакты, и мы свяжемся, чтобы все обсудить"
        ></meta>
        <meta property="og:type" content="website" />
      </Head>
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
