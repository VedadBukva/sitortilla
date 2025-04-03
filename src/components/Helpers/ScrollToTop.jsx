import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Postavlja skrol na vrh
  }, [pathname]); // Pokreće se svaki put kada se promeni ruta

  return null;
};

export default ScrollToTop;
