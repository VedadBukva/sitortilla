import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cover from "./components/Cover/Cover";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Feed from "./components/Feed/Feed";
import NumberInfo from "./components/NumberInfo/NumberInfo";
import Gallery from "./components/Gallery/Gallery";
import CakesAndCatering from "./components/CakesAndCatering/CakesAndCatering";
import Contact from "./components/Contact/Contact";
import "./App.css";

function Home() {
  return (
    <div className="app-body">
      <Cover />
      <NumberInfo />
      <Gallery />
      <CakesAndCatering />
      <Feed />
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proizvodi" element={<Products />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
