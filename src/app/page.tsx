import Image from "next/image";
import Hero from "./Hero/Hero"; // Update this line
import Footer from "./Footer/page";
import Header from "./Header/page";
import TopBar from "./TopBar/page";
import Login from "./Login/page";
import Shop from "./Shop/page";
import ShopList from "./ShopList/page";
import ProductDetail from "./ProductDetail/page";
import ShoppingCart from "./ShoppingCart/page";
import Contact from "./Contact/page";
import ErrorPage from "./Error/page";
import AboutUs from "./AboutUs/page";
import Blogs from "./Blogs/page";

export default function Home() {
  return (
    <>
        <TopBar/>
        <Header/>
    <Hero/>
    {/* <Login/> */}
    {/* <Shop/> */}
    {/* <ShopList/> */}
    {/* <ProductDetail/> */}
    {/* <ShoppingCart/> */}
    {/* <Contact/> */}
    {/* <ErrorPage/> */}
    {/* <Blogs/> */}
    {/* <AboutUs/> */}
    <Footer/>
    </>
  );
}