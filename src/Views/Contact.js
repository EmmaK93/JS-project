import React from 'react';
import Header from '../Components/Header/Header';
import FooterSection from '../Components/Footer/FooterSection';
import Forms from '../Components/Forms/Forms';
import Maps from '../Components/Maps/Maps';
import './Contact.css';
import img_WhiteLines from '../Assets/images/vit-linje-v.svg';

const Contact = () => {
  return (
    <>
    <Header/>
    
    <main>
    <section className="top-content">
        <img className="background-lines" src={img_WhiteLines} alt=""/>
            <div className="container link-text">
                <a href="/index.html"> Home</a>
                <a href="/contact.html">Contact</a>
            </div>
            <div>   
                <h1>Let's Connect</h1>
            </div>
    </section>
        <section className="container">
            <div className="contact-box">
                <div className= "box">
                    <div>
                        <i className="fa-solid fa-location-dot"></i> <h3>Visit us</h3>
                    </div>
                    <p> Sveavägen 31 <br/>
                        111 34 Stockholm</p>
                </div>
                <div className= "box">
                    <div>
                        <i className="fa-solid fa-phone"></i><h3>Call us</h3>
                    </div>
                    <p> +46 (8) 121 470 50 <br/>
                        +46 (8) 121 470 51</p>
                </div>
                <div className= "box">
                    <div>
                    <i className="fa-solid fa-envelope"></i><h3>Email us</h3>
                    </div>
                    <p> info@crito.com <br/>
                        support@crito.com</p>
                </div>
            </div>

        </section>
        
           
            <Forms/>
                
        <section className="container">
        <Maps/>
</section>


    </main>
    <FooterSection/>
    </>
  )
}

export default Contact