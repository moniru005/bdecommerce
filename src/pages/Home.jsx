import BestSelling from "../components/ProductSections/BestSelling";
import Features from "../components/ProductSections/Features";
import AboutUs from "../components/about/AboutUs";
import Banner from "../components/banner/Banner";
import Categories from "../components/categories/Categories";
// import Testimonials from "../components/testimonials/Testimonials";
import TestimonialsSwipe from "../components/testimonials/TestimonialsSwipe";

const Home = () => {
  return (
    <>
      <Banner />
      <BestSelling />
      <Features />
      <AboutUs />
      <Categories />
      {/* <Testimonials /> */}
      <TestimonialsSwipe />
    </>
  );
};

export default Home;
