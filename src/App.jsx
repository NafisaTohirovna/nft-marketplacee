import Categories from "./components/Categories";
import Collection from "./components/Collection";
import Creators from "./components/Creators";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Magic from "./components/Magic";
import Navigator from "./components/Navigator";
import Subscribe from "./components/Subscribe";
import Works from "./components/Works";
import "./style/main.css";

function App() {
  return (
    <main>
      <Navigator />
      <Hero />
      <Collection />
      <Creators />
      <Categories />
      <Discover />
      <Magic />
      <Works />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
