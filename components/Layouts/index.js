import Navbar1 from "../Navbar/Navbar1"
import Head from "next/head";
// import font from "../../public/airbnb-cereal-font"

const Layouts = ({ children, title, login }) => {
  return (
    <>
      <Head>
        <title>Food recipe {title || ""}</title>
      </Head>
      <Navbar1 />
      {children}
    </>
  );
};

export default Layouts;