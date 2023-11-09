import React from 'react'
import './Feature.css'
import '../Generics/Buttons/Buttons.css'
import '../Generics/Title/Title.css'

const FeatureSection = () => {
  return (
    <section className="Feature-sec">
    <div className="container Features">
        <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <a href="#" target="_blank">
            <button className="Btn-yellow">Learn more<i className="fa-solid fa-square-arrow-up-right"></i></button>
            </a>
        </div>
        <div className="grid-container">
            <a href="#" target="_blank">
                <div className="grid-item">
                    <i className="fa-regular fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </a>
            <a href="#" target="_blank">
                <div className="grid-item">
                    <i className="fa-regular fa-lightbulb"></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </a>
            <a href="#" target="_blank">
                <div className="grid-item">
                    <i className="fa-solid fa-chart-line"></i>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </a>
            <a href="#" target="_blank">
                <div className="grid-item">
                    <i className="fa-solid fa-gear"></i>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </a>
        </div>

    </div>

</section>
  )
}

export default FeatureSection