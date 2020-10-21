import Contacts from "../components/contacts";
import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";

export default function ContactsRoute() {
  return (
    <div>
      <Head>
        <title>Контакты | CAMPUS Production</title>
        <link rel="icon" href="/favicon.ico" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"></link>
        <meta httpEquiv="content-language" content="ru"></meta>
        <meta property="og:title" content="Контакты | CAMPUS Production"></meta>
        <meta property="og:url" content="Контакты"></meta>
        <meta property="og:image" content="main.jpg"></meta>
        <meta
          property="og:description"
          content="За 4 года было реализовано более 100 проектов: рекламные видео, музыкальные клипы, дизайны сайтов, оформление социальных сетей. Каждую задачу мы решаем осмысленно, и красиво. Для начала работы нам надо поговорить. Достаточно указать контакты, и мы свяжемся, чтобы все обсудить"
        ></meta>
        <meta property="og:type" content="website" />
      </Head>

      <Header></Header>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}
