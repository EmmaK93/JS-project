import React from 'react'
import './Testimonial.css'
import '../Buttons/Buttons.css'
import '../Title/Title.css'

import img_Ellipse1 from '../../Assets/images/Ellipse 1.png'
import img_Ellipse2 from '../../Assets/images/Ellipse 2.png'
import img_Ellipse3 from '../../Assets/images/Ellipse 3.png'



const TestimonialSection = () => {
  return (
    <section className="Testimonial">
    <div className="container">
        <div className="review">
            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
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
                <a href="#" target="_blank">
                <button className="Btn-black">All Reviews<i className="fa-solid fa-square-arrow-up-right"></i></button>
                </a>
            </div>
        </div>
     
    </div>

    </section>
  )
}

export default TestimonialSection