import React from 'react'
import './MainPage.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function MainPage(){
    let history = useHistory()

    const acikClick = () => {
        history.push('/OrderPage');
        
    }
    return (<>
        <div className="main-container">
        <img src="./Assets/mile1-assets/logo.svg" className="logo" />
        <div className="tanitim">
        <p
            style={{
              fontFamily: "Satisfy",
              color: "#FDC913",
              fontSize: "32px",
              height: "40px",
              width: "50%",
              lineHeight: "44.27px",
            }}
          >
            fırsatı kaçırma
          </p>
          <p>KOD ACIKTIRIR</p>
          <p>PIZZA, DOYURUR</p>
        </div>
            <button onClick={acikClick} className='aciktim'> 
                ACIKTIM
            </button>
            <img
            src='./Assets/mile1-assets/home-banner.png'
            className='main-image'
        ></img>
        </div>
  
    </>)
}



