import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import About from '../components/about'

export default function AboutRoute() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </div>
  );
}
