 
import "./App.css";
import { Nav } from "./components/navbar";
import { Header } from "./components/header";
import { Feature } from "./components/features";
import { Footer } from "./components/footer";
import { Blog } from "./components/blog";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Feature />
      <Blog />
      <Footer />

    </>
  );
}

export default App;
