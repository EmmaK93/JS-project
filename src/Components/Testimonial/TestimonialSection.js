import React from 'react'
import TitleSection from '../Generics/Title/TitleSection'
import Button from '../Generics/Buttons/Button'

import './Testimonial.css'

import img_Ellipse1 from '../../Assets/images/Ellipse 1.png'
import img_Ellipse2 from '../../Assets/images/Ellipse 2.png'
import img_Ellipse3 from '../../Assets/images/Ellipse 3.png'




const TestimonialSection = () => {
  return (
    <section className="Testimonial">
    <div className="container">
        <div className="review">
            <TitleSection smallTitle="Testimonial" Title="What Our Client Says"/>
           
            <div className="re-box">
                <div className="review-box">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <img src={img_Ellipse1} alt="Picture of business manager"/>
                    <h3>Cassandra Warren</h3>
                    <p className="orange">Business Manager, Dorfus</p>

                </div>
                <div className="review-box">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <img src={img_Ellipse2} alt="Picture of Senior Developer"/>
                    <h3>Amanda Tulling</h3>
                    <p className="orange">Senior Developer, Square</p>

                </div>
                <div className="review-box">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <img src={img_Ellipse3} alt="picture of Key account manager"/>
                    <h3>Jack McDogglas</h3>
                    <p className="orange">Key Account Manager, Gobona</p>
                    
                </div>
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