import "./TextAnimation.css";
import React, { useEffect } from "react";

const TextAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Kada wrapper postane vidljiv, dodajemo klasu koja pokreće animaciju
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Zaustavljamo dalja praćenja za ovaj element
          }
        });
      },
      {
        threshold: 0.5, // Detektuje kad je 50% elementa vidljivo
      }
    );

    // Targetiramo element za praćenje
    const target = document.querySelector(".cakes-catering-wrapper");
    if (target) {
      observer.observe(target);
    }

    // Cleanup observera pri unmount-u komponente
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className="text-container">
      <p className="text-item">Sitortilla</p>
      <p className="text-item">Pekare</p>
      <p className="text-item">Poslastice</p>
      <p className="text-item">Catering</p>
    </div>
  );
};
  
export default TextAnimation;
  