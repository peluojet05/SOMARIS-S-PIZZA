import { useState } from "react";
import "../styles/Carrousel.css";

import { motion, AnimatePresence} from 'framer-motion'

const Carrousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () =>{
        setCurrentIndex((prevIndex)=>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () =>{
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length -1 : prevIndex - 1
        );
    };
    const handleDotClick = (index) =>{
        setCurrentIndex(index);
    }
    return (
    <div className="carousel">
        <img
            key={currentIndex}
            src={images[currentIndex]}
        />
        <div className="slide_direction">
            <div className="left" onClick={handlePrevious}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                >
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                </svg>
            </div>
            <div className="right" onClick={handleNext}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                >
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
            </div>
        </div>
        <div className="indicator">
            {images.map((_, index) => (
            <div
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
            ></div>
        ))}
        </div>
    </div>
    );
};

const Carrousedasdal = () => {
    const planets = [
        "https://images.vexels.com/media/users/3/152536/isolated/preview/401b51c3a9098f12b566121c92009877-mars-planet-icon-by-vexels.png",
        "https://images.vexels.com/media/users/3/152680/isolated/preview/22e162e0d0066ad0881e1ee797574680-uranus-planet-icon-by-vexels.png",
        "https://images.vexels.com/media/users/3/152509/isolated/preview/e058e7f53d319e0628763c70ab7dce14-jupiter-planet-icon-by-vexels.png"
    ];

    return(
    <>
        <Carrousel images={planets}/>
    </>    
    )
};

export default Carrousedasdal;
