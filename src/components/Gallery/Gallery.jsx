import img1 from "../../assets/SITO toritilja 15cm 3D.png";
import img2 from "../../assets/SITO toritilja 20cm 8kom 3D.png";
import img3 from "../../assets/SITO toritilja 25cm 4kom 3D.png";
import img4 from "../../assets/SITO toritilja 25cm 6kom 3D.png";
import img5 from "../../assets/SITO toritilja 25cm 10kom 3D.png";
import img6 from "../../assets/SITO toritilja 30cm 10kom 3D.png";
import img7 from "../../assets/SITO toritilja curry 25cm 6kom 3D.png";
import img8 from "../../assets/SITO toritilja mexican 25cm 6kom 3D.png";
import img9 from "../../assets/SITO toritilja simit 25cm 6kom 3D.png";

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        <div className="cover">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index + 1}`} className={`cover-item cover-item-${index + 1}`} />
            ))}
        </div>
    )
};

export default Gallery;