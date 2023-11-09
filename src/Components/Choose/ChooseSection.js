import React from 'react'

import './Choose.css'
import '../Generics/Buttons/Buttons.css'
import '../Generics/Title/Title.css'
import img_BeigeBox from '../../Assets/images/Beige-ruta.svg'
import img_WomenTalk from '../../Assets/images/Image3.png'

const ChooseSection = () => {
  return (
    <section class="Choose">
        <img class="background-box" src={img_BeigeBox} alt=""/>
        <div class="container">
            <div class="choose-us">
                <div class="section-title">
                <p>Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>
                
                <div class="column-item">
                    <div class="columni">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <div class="text-col">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div class="columni">
                        <i class="fa-brands fa-uncharted"></i>
                        <div class="text-col">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div class="columni">
                        <i class="fa-solid fa-paintbrush"></i>
                        <div class="text-col">
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div class="columni">
                        <i class="fa-solid fa-robot"></i>
                        <div class="text-col">
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