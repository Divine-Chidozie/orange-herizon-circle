import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import EventCard from "../components/EventCard";
import EventConnectWorks from "../components/EventConnectWorks";
import Rating from "../components/Rating";
import PlannerVendor from "../components/PlannerVendor";
import GrowBusiness from "../components/GrowBusiness";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar  />
      <Hero />
      <CategoryCard />
      <EventCard />
      <EventConnectWorks />
      <Rating />
      <PlannerVendor />
      <GrowBusiness />
      <Faq></Faq>
      <Footer />
    </div>
  );
};

export default Home;
