"use client";
import Banner from "./Banner";  // Import the Banner component
import LatestProducts from "./LatestProducts";  // Import LatestProducts component
import FeaturedProducts from "./FeaturedProducts";  // Import FeaturedProducts component
import LatestBlog from "./LatestBlog";
import DiscountItem from "./DiscountItem";
import Services from "./Services";
import Unique from "./Unique";
import TrendingProducts from "./TrendingProducts";
import TopCategory from "./TopCategory";
import Subscribe from "./Subscribe";

const Hero: React.FC = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <LatestProducts />
      <Services/>
      <Unique/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategory/>
      <Subscribe/>
      <LatestBlog/>
    </div>
  );
};

export default Hero;
