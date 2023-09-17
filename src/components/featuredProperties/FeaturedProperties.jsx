import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className='fpItems'> <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="Imgfp" />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">$150</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItems'> <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className="Imgfp" />
                <span className="fpName">7Seasons Apartments Budapest</span>
                <span className="fpCity">NewYork</span>
                <span className="fpPrice">$135</span>
                <div className="fpRating">
                    <button>8.5</button>
                    <span>Good</span>
                </div>
            </div>
            <div className='fpItems'> <img src="https://cf.bstatic.com/xdata/images/hotel/square600/348318206.webp?k=fc5cf40664adabf841df9ce8b7e362ad51381a14634ff2fb25999a11f562a3ab&o=" alt="" className="Imgfp" />
                <span className="fpName">Eolian Port B&B</span>
                <span className="fpCity">LalaMosa</span>
                <span className="fpPrice">$200</span>
                <div className="fpRating">
                    <button>9.9</button>
                    <span>V.I.P</span>
                </div>
            </div>
            <div className='fpItems'> <img src="https://cf.bstatic.com/xdata/images/hotel/square600/189901067.webp?k=480b709db194e982ef71b3adcfcd7d1635b42b5968be0a5d8c1fa2c80996e9b1&o=" alt="" className="Imgfp" />
                <span className="fpName">Darbar Hotel</span>
                <span className="fpCity">Lahore</span>
                <span className="fpPrice">$120</span>
                <div className="fpRating">
                    <button>7.9</button>
                    <span>Good</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties