import Navbar from "../Navbar"
import Head from "next/head";
// import font from "../../public/airbnb-cereal-font"

const Layouts = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Food recipe {title || ""}</title>
      </Head>
      <Navbar/>
      {children}
    </>
  );
};

export default Layouts;