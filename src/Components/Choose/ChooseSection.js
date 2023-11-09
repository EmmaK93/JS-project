import React from 'react'
import TitleSection from '../Generics/Title/TitleSection'

import './Choose.css'


import img_BeigeBox from '../../Assets/images/Beige-ruta.svg'
import img_WomenTalk from '../../Assets/images/Image3.png'


const ChooseSection = () => {
  return (
    <section className="Choose">
        <img className="background-box" src={img_BeigeBox} alt=""/>
        <div className="container">
            <div className="choose-us">
                <TitleSection smallTitle="Why Choose Us" Title="Why We Are The Best Business Consulting Agency"/>
                
                <div className="column-item">

                    <div className="columni">
                        <i className="fa-regular fa-thumbs-up"></i>
                        <div className="text-col">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>

                    <div className="columni">
                        <i className="fa-brands fa-uncharted"></i>
                        <div className="text-col">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>

                    <div className="columni">
                        <i className="fa-solid fa-paintbrush"></i>
                        <div className="text-col">
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    
                    <div className="columni">
                        <i className="fa-solid fa-robot"></i>
                        <div className="text-col">
                            <h3>Artificial Inteligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div>
                <img src={img_WomenTalk} alt="Picture of two women talking"/>
            </div>

        </div>

    </section>
  )
}

export default ChooseSection