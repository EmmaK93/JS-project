import React from 'react'
import GridItem from './GridItem'
import Button from '../Generics/Buttons/Button'

import './Feature.css'



const FeatureSection = () => {
  return (
    <section className="Feature-sec">
        <div className="container Features">
            <div class="section-title">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Button type="yellow" Title="Learn More" url="/Feature/Learnmore"/>
            </div>
            <div className="grid-container">

                <GridItem Title="Business Advice" smallTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit." url="/services/Businessadvice"/>
                <GridItem Title="Startup Business" smallTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit." url="/services/Startupbusiness"/>
                <GridItem Title="Financial Advice" smallTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit." url="/services/Financialadvice"/>
                <GridItem Title="Risk Management" smallTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit." url="/services/Riskmanagement"/>
            
            </div>

    </div>

</section>
  )
}

export default FeatureSection