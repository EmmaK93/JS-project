import React from 'react'
import GridItem from './GridItem'
import Button from '../Generics/Buttons/Button'

import './Feature.css'



const FeatureSection = () => {
  return (
    <section className="Feature-sec">
        <div className="container Features">
            <div className="section-title">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Button type="yellow" Title="Learn More" url="/Feature/Learnmore"/>
            </div>
            <div className="grid-container">

                <GridItem Title="Business Advice" smallTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit." url="/services/Businessadvice" icon="fa-regular fa-handshake"/>
                <GridItem Title="Startup Business" smallTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit." url="/services/Startupbusiness"icon="fa-regular fa-lightbulb"/>
                <GridItem Title="Financial Advice" smallTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit." url="/services/Financialadvice" icon="fa-solid fa-chart-line"/>
                <GridItem Title="Risk Management" smallTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit." url="/services/Riskmanagement" icon="fa-solid fa-gear"/>
            
            </div>

    </div>

</section>
  )
}

export default FeatureSection