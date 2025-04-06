import React from 'react';
import "./Services.css"
import cateringVideo from "../../assets/catering.mp4";
import cakesVideo from "../../assets/cakes.mp4";
import bakery1 from "../../assets/pekara1.jpg";
import bakery2 from "../../assets/pekara2.jpg";
import bakery3 from "../../assets/pekara3.jpg";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      else {
        document.querySelector(".services-wrapper").animate(
            [
              { transform: "translateY(-60vh)", opacity: 0 },
              { transform: "translateY(0)", opacity: 1 }
            ],
            {
              duration: 800,
              easing: "ease-out",
              fill: "forwards"
            }
          );
      }
    }, [location]);

    return (
      <div className="services-wrapper">
        <div id="sitortilla"></div>
        <div className="services-sitortilla">
            <div className="services-image">
                <iframe width="350" height="300" src="https://www.youtube.com/embed/wFmVT14j1Q4?si=hv-Gb4FjoPFH4TEi?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div className="services-text">
                <h1>Sitortilla</h1>
                <p>Sitortilla iz pekare "Sito" je inovativni proizvod koji spaja najbolje od tradicionalnog pekarstva sa modernim potrebama ukusa. Naša Sitortilla je savršen izbor za ljubitelje dobrog okusa, a s njom ćete uživati u svakom zalogaju, bilo da je jedete kao brzi obrok ili kao dio ručka.</p>
                <p>Idealna za brzi užitak tokom dana, ali i kao jedinstven specijalitet za sve one koji žele nešto novo i ukusno. Posjetite nas u pekari Sito i uvjerite se zašto je Sitortilla pravi izbor za vaše nepce!</p>
            </div>
        </div>
        <div id="catering" className="services-line"></div>
        <div className="services-catering">
            <div className="services-text">
                <h1>Catering</h1>
                <p>Pekara "Sito" ponosno nudi vrhunsku catering uslugu, pružajući vam najkvalitetnije i najukusnije proizvode koji će unaprediti svaki događaj. Bilo da je u pitanju korporativni događaj, svadbeni prijem, rođendanska proslava ili jednostavno prijatno okupljanje s prijateljima, naša ponuda cateringa nudi raznovrsne specijalitete koji će zadovoljiti svačiji ukus.</p>
                <p>Naša ponuda uključuje bogatstvo svežih peciva, slanih i slatkih zalogaja, kao i specijalitete po narudžbi, kao što su ukrašeni kolači, torta po vašem izboru, finger food i razni specijaliteti koji će oduševiti vaše goste. Svaka narudžbina je pažljivo pripremljena i isporučena na vreme, uz najviši standard kvaliteta.</p>
            </div>
            <div className="services-image">
                <video width="100%" height="auto" controls autoPlay muted>
                    <source src={cateringVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div id="pekare" className="services-line"></div>
        <div className="services-bakeries">
            <div className="services-image">
                <img className="services-bakeries-images" src={bakery1} alt="Pekara"/>
                <img className="services-bakeries-images" src={bakery2} alt="Pekara"/>
                <img className="services-bakeries-images" src={bakery3} alt="Pekara"/>
            </div>
            <div className="services-text">
                <h1>"Sito" pekare</h1>
                <p>Pekara "Sito" je prepoznatljiv naziv u svijetu svježe pečenih delicija, koja se ponosi tradicijom i vrhunskom kvalitetom svojih proizvoda. Smještena u srcu grada, Pekara Sito je od samog početka postavila visoke standarde u pečenju, stvarajući širok asortiman pekarskih proizvoda koji zadovoljavaju i najzahtjevnije gurmane.</p>
                <p>S našim širokim asortimanom proizvoda, od mirisnih hljebova, svježih peciva, do slasnih kolača i torti, nastojimo svaki dan svojim kupcima pružiti svježinu i kvalitetu. Naši proizvodi su izrađeni od najkvalitetnijih sastojaka, pažljivo odabrani kako bi zadovoljili potrebe i želje svih naših kupaca.</p>
                <p>Osim svakodnevne ponude, Pekara "Sito" se ponosi i specijaliziranim proizvodima, kao što su gurmanski sendviči, specijalni kolači za različite prigode, te catering uslugama koje pružamo za sve vrste događanja. Naša misija je da uvijek budemo korak ispred u zadovoljavanju vaših potreba, bilo da je riječ o svježem doručku, svečanom ručku ili posebnoj proslavi.</p>
            </div>
        </div>
        <div id="poslastice" className="services-line"></div>
        <div className="services-cakes">
            <div className="services-text">
                <h1>Poslastice</h1>
                <p>Sito poslastice su spoj savršenstva i strasti prema slastičarstvu, koji osvajaju na prvi zalogaj.</p>
                <p>U našoj ponudi možete pronaći raznovrsne torte, kolače, kekse, praline, kao i specijalne deserte koji se pripremaju po tradicionalnim receptima, ali i modernim inovacijama koje će oduševiti vaša čula. Bilo da tražite tortu za vjenčanje, rođendan ili neku drugu posebnu prigodu, Sito poslastice će biti savršen izbor za svaki trenutak.</p>
                <p>Za one koji žele posebnu poslastičarsku uslugu, nudimo i prilagođene torte i deserte prema vašim željama, kako bi vaša proslava bila još posebna i jedinstvena. Naša strast za slatkišima i predanost kvaliteti učinit će svaki trenutak nezaboravnim.</p>
            </div>
            <div className="services-image">
                <video width="100%" height="auto" controls autoPlay muted>
                    <source src={cakesVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
      </div>
    );
  };
  
export default Services;