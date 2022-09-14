import one from "./images/backdrop_1.jpg";
import "./App.css";
import { Nav } from "./components/navbar";
import { Headers } from "./components/hero_two";
import { Header } from "./components/header";
import { Feature } from "./components/features";
import { Footer } from "./components/footer";
import { Blog } from "./components/blog";
import { Card } from "./components/card";
import { Hero } from "./components/hero";

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
