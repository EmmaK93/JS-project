import React from 'react'
import TitleSection from '../Generics/Title/TitleSection'
import Button from '../Generics/Buttons/Button'

import './Testimonial.css'

import img_Ellipse1 from '../../Assets/images/Ellipse 1.png'
import img_Ellipse2 from '../../Assets/images/Ellipse 2.png'
import img_Ellipse3 from '../../Assets/images/Ellipse 3.png'
import TestimonialBox from './TestimonialBox'




const TestimonialSection = () => {
  return (
    <section className="Testimonial">
    <div className="container">
        <div className="review">
            <TitleSection smallTitle="Testimonial" Title="What Our Client Says"/>
           
            <div className="re-box">

                <TestimonialBox image={img_Ellipse1} imgDescription="Picture of business manager" Title="Cassandra Warren" smallTitle="Business Manager, Dorfus"/>
                <TestimonialBox image={img_Ellipse2} imgDescription="Picture of Senior Developer" Title="Amanda Tulling" smallTitle="Senior Developer, Square"/>
                <TestimonialBox image={img_Ellipse3} imgDescription="picture of Key account manager" Title="Jack McDogglas" smallTitle="Key Account Manager, Gobona"/>
               
            </div>    
            <div className="Btn-sec">
                <Button type="black" Title="All Reviews" url="/Reviews"/>
            </div>
        </div>
     
    </div>

    </section>
  )
}

export default TestimonialSection