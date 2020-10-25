import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img 
            className="home_image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
        
        <div className="home_row">
            <Product 
            id="1223"
            title="The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback"
            price={10.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200r_.jpg"
            />
            <Product 
            id="1223"
            title="The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback"
            price={19.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
        </div>
        <div className="home_row">
            <Product 
            id="1223"
            title="The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback"
            price={25.75}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Product 
            id="1223"
            title="The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback"
            price={450.05}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product 
            id="1223"
            title="The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback"
            price={108.70}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
        </div>
        <div className="home_row">
            <Product 
            id="1223"
            title="The Lean Startup:How constant Innovation creates  Radically Successful Businesses Paperback"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
        </div>
        </div>
    )
}

export default Home
