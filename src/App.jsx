import { Routes, Route } from "react-router-dom";
import { useEffect , useState } from "react";
import Header from "./components/Header/Header";
import Cover from "./components/Cover/Cover";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Feed from "./components/Feed/Feed";
import NumberInfo from "./components/NumberInfo/NumberInfo";
import Gallery from "./components/Gallery/Gallery";
import CakesAndCatering from "./components/CakesAndCatering/CakesAndCatering";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
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
  const [background, setBackground] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const gradient = `linear-gradient(to bottom, rgb(92, 51, 23), rgb(139, 69, 19), rgb(101, 67, 33))`;

      setBackground(gradient);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className="app" style={{ 
        background: background,
        transition: "background 0.5s ease"
      }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<About />} />
        <Route path="/proizvodi" element={<Products />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
