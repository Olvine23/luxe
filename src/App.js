 
import "./App.css";
import  {Nav}  from "./components/nav_two";
import { Headers } from "./components/hero_two";
import { Deals } from "./components/deals";
import Hero from "./components/hero/Hero";
import { Feature } from "./components/features";
import { Footer } from "./components/footer";
import { Blog }from "./components/blog";
import { Card } from "./components/card";
import { Swipe } from "./components/swiper";

function App() {
  return (
    <>
      
      {/* <Hero /> */}
    <Nav />

      {/* <Header /> */}
      <Hero />
    
      
      <Card />
      <Deals />

       
     
      <Blog />
      <Footer />
    </>
  );
}

export default App;
