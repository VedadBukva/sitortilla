import FlipBook from "../FlipBook/FlipBook";
import "./Products.css";


const Products = () => {
    return (
      <div className="products-wrapper">
        <div className="products-description">
          <h2>Nova proizvodnja u Goraždu – Projekat "Sitortilla"</h2>
          <p>Proizvodnja "Sitortilla" tortilja pokrenuta je s ciljem jačanja lokalne privrede, otvaranja novih radnih mjesta i kreiranja prepoznatljivog bh. proizvoda koji zadovoljava najviše standarde kvalitete i okusa.</p>
          <p>U modernoj proizvodnoj hali, opremljenoj savremenom tehnologijom, svakodnevno se proizvode svježe tortilje prema originalnoj recepturi. Kroz razgovore sa uposlenicima i rukovodstvom, saznajemo kako ovaj projekat već bilježi uspjehe na domaćem tržištu, ali i priprema prve korake ka izvozu.</p>
          <p>Ponosni smo što Goražde postaje prepoznatljivo po još jednom kvalitetnom prehrambenom proizvodu – Sitortilla.</p>
        </div>
        <div className="products-image">
          <iframe width="700" height="400" src="https://www.youtube.com/embed/wFmVT14j1Q4?si=hv-Gb4FjoPFH4TEi?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div className="products-catalog">
          <h3>Pogledajte naš katalog "Sitortilla" proizvoda:</h3>
          <FlipBook />
        </div>
      </div>
    );
  };
  
  export default Products;