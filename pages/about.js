import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import About from "../components/about";

export default function AboutRoute() {
  return (
    <div>
      <Head>
        <title>О нас | CAMPUS Production</title>
        <link rel="icon" href="/favicon.ico" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"></link>
        <meta httpEquiv="content-language" content="ru"></meta>
        <meta property="og:title" content="О нас | CAMPUS Production"></meta>
        <meta property="og:url" content="О нас"></meta>
        <meta property="og:image" content="main.jpg"></meta>
        <meta
          property="og:description"
          content="Специалисты Campus Production – это молодые тигры, которые уже не раз показали своё чувство стиля и свою отдачу работе. Все члены команды начинали с фриланса. Кто-то снимал мероприятия. Кто-то делал логотипы для своих знакомых. Но с развитием профессиональных навыков каждый понял, что ресурсы одного человека ограничены – и было принято решение объединиться в команду."
        ></meta>
        <meta property="og:type" content="website" />
      </Head>
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </div>
  );
}
