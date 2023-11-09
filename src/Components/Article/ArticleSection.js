import React from 'react'
import TitleSection from '../Generics/Title/TitleSection'
import Button from '../Generics/Buttons/Button'

import './Article.css'



import img_art1 from '../../Assets/images/art.1.png'
import img_art2 from '../../Assets/images/art.2.png'
import img_art3 from '../../Assets/images/art.3.png'


const ArticleSection = () => {
  return (
    <section className="article">
            <div className="container">
                <div className="Art-start">
                    <TitleSection smallTitle="Article & News" Title="Get Every Single Articles & News"/>
                    
                    <div>
                        <Button type="Trans" Title="Browse Articles" url="/News/Browsearticles"/>
                    </div>

                </div>
                <div className="art-menu">
                    <a href="#" target="_blank">
                        <div className="art-box">
                            <img src={img_art1} alt="Picture of a business woman"/>
                            <p className="art-title">Business</p>
                            <h3>How To Use Digitalization In The Classroom</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="art-box">
                            <img src={img_art2} alt="picture of a calender"/>
                            <p className="art-title">Business</p>
                            <h3>How To Implement Chat GPT In Your Projects</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="art-box">
                            <img src={img_art3} alt="Picture of two books on a table"/>
                            <p className="art-title">Business</p>
                            <h3>The Guide To Support Modern CSS Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                    </a>
                    
                </div>
            </div>


        </section>
  )
}

export default ArticleSection