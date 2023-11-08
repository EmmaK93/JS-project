import React from 'react'
import './Sponsor.css'


import img_8 from '../../Assets/images/8.svg'
import img_7 from '../../Assets/images/7.svg'
import img_6 from '../../Assets/images/6.svg'
import img_9 from '../../Assets/images/9.svg'
import img_10 from '../../Assets/images/10.svg'


const SponsorSection = () => {
  return (
    <section className="sponsor">
        <div className="container">
            <img src={img_8}/><a src="#"></a>
            <img src={img_7}/><a src="#"></a>
            <img src={img_6}/><a src="#"></a>
            <img src={img_9}/><a src="#"></a>
            <img src={img_10}/><a src="#"></a>
        </div>
        </section>
  )
}

export default SponsorSection