import React from 'react'

import './About.css'
import '../Generics/Buttons/Buttons.css'
import '../Generics/Title/Title.css'

import img_woman from '../../Assets/images/Image.jpg'

const AboutSection = () => {
  return (
    <section className="About">
            <div className="container">
            <div>
                <img src={img_woman} alt="Picture of a woman in an office"/>
                <div className="blue-box">
                    <div className="box-title">
                    <h3>Samantha Brown,</h3>
                    <p className="orange">Founder</p>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div>
                <div className="section-title">
                    <p>About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                </div>
                    <p className="para-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    <a href="#" target="_blank">    
                    <button className="Btn-black">Learn more<i className="fa-solid fa-square-arrow-up-right"></i></button>
                    </a>
                    <a href="#" target="_blank">
                    <button className="Btn-trans"><i className="fa-regular fa-circle-play play"></i>intro video</button>
                    </a>
                </div>
            </div>
            
        </section>
  )
}

export default AboutSection