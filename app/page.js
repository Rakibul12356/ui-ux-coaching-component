import Image from "next/image";
import Questions from "./components/F&Q/Questions";
import PathCard from "./components/pathCard/PathCard";
import ServiceCard from "./components/serviceCard/ServiceCard";
import Footer from "./components/footer/Footer";
import Contacts from "./components/Contact/Contacts";

export default function Home() {
  return (
    <div className="container  mx-auto ">
      <PathCard/>
      <ServiceCard/>
      <Contacts/>
      <Questions/>

      <Footer/>
    </div>
  );
}
