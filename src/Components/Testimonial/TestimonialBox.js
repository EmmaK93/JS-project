import React from 'react'
import "./Testimonial.css"

const TestimonialBox = ({image, imgDescription, Title, smallTitle}) => {
  return (
    <div className="review-box">
        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
        <img src={image} alt={imgDescription}/>
        <h3>{Title}</h3>
        <p className="orange">{smallTitle}</p>

    </div>
  )
}

export default TestimonialBox