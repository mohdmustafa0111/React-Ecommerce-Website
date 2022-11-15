import HeroSection from "../components/HeroSection";
import { useContext } from "react";
import AppContext from "../context/ProductContext";

const About = () => {
  const { myName } = useContext(AppContext);

  const data = {
    name: "Thapa Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
