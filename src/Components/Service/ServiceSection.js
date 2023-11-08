import React from 'react'

import './Service.css'
import '../Buttons/Buttons.css'
import '../Title/Title.css'

const ServiceSection = () => {
  return (
    <section className="Service">
        <img className="background-lines"src="/assets/images/vita-linjer.svg" alt=""/>
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="boxtext">
                
                <box className="boxitem"> 
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a href="#" target="_blank"><botton className="Btn-arrow"><i className="fa-solid fa-arrow-right"></i></botton></a>
                </box>
                <box className="boxitem">
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a href="#" target="_blank"><botton className="Btn-arrow"><i className="fa-solid fa-arrow-right"></i></botton></a>
                </box>
                <box className="boxitem">
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a href="#" target="_blank"><botton className="Btn-arrow"><i className="fa-solid fa-arrow-right"></i></botton></a>
                </box>
                <box className="boxitem">
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a href="#" target="_blank"><botton className="Btn-arrow"><i className="fa-solid fa-arrow-right"></i></botton></a>
                </box>
                
            </div>
            <div className="Btn-sec">
                <a href="#" target="_blank">
                <button className="Btn-trans">Browse Services<i className="fa-solid fa-square-arrow-up-right"></i></button>
                </a>
            </div>
            
        </div>
    </section>
  )
}

export default ServiceSection