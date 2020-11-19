import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../components/home";
//import { getVideoCases } from "../lib/getvideocasesbyid";

import { getEntries } from "./../lib/contentful";

export default function HomeRoute({ cases, loaded }) {
  return (
    <div>
      <Head>
        <title>Главная | CAMPUS Production</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0"></meta>
        <meta httpEquiv="content-language" content="ru"></meta>
        <meta property="og:title" content="CAMPUS Production"></meta>
        <meta property="og:url" content="CAMPUS Production"></meta>
        <meta property="og:image" content="main.jpg"></meta>
        <meta
          property="og:description"
          content="За 4 года было реализовано более 100 проектов: рекламные видео, музыкальные клипы, дизайны сайтов, оформление социальных сетей. Каждую задачу мы решаем осмысленно, и красиво. Для начала работы нам надо поговорить. Достаточно указать контакты, и мы свяжемся, чтобы все обсудить"></meta>
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="За 4 года было реализовано более 100 проектов: рекламные видео, музыкальные клипы, дизайны сайтов, оформление социальных сетей. Каждую задачу мы решаем осмысленно, и красиво. Для начала работы нам надо поговорить. Достаточно указать контакты, и мы свяжемся, чтобы все обсудить"
        />
      </Head>

      <Header></Header>
      <Home cases={cases} loaded={loaded}></Home>
      <Footer></Footer>
    </div>
  );
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const entries = await getEntries();
  //entries.map((entry) => console.log(entry.name));

  let cases = entries;
  let loaded = false;

  if (cases.length > 0) {
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
