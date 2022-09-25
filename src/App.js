 
import "./App.css";
import { Nav } from "./components/navbar";
import { Headers } from "./components/hero_two";
 
import { Feature } from "./components/features";
import { Footer } from "./components/footer";
import { Blog } from "./components/blog";
import { Card } from "./components/card";
import { Swipe } from "./components/swiper";

function App() {
  return (
    <>
      <Nav />
      {/* <Hero /> */}


      {/* <Header /> */}
      <Headers />
      <Card />

      <Feature />
     
      <Blog />
      <Footer />
    </>
  );
}

export default App;
