import React from 'react'
import './Footer.css'


import img_WhiteLinesFooter from '../../Assets/images/vit-linje-footer.svg'
import img_logotypeDark from '../../Assets/images/Logo.dark.svg'

const FooterSection = () => {
  return (
    <footer>
    <section className="footer">
        <img className="background-lines" src={img_WhiteLinesFooter} alt="scirble"/>
            <div className="container">
                <div className="fot-info">
                    <div className="fot-box" id="box1">
                        <img src={img_logotypeDark} alt="Logotype"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="fot-box">
                        <h3>Company</h3>
                        <ul>
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Features</li></a>
                            <a href="#"><li>Works</li></a>
                            <a href="#"><li>Career</li></a>
                        </ul>
                    </div>
                    <div className="fot-box">
                        <h3>Help</h3>
                        <ul>
                            <a href="#"><li>Customer Support</li></a>
                            <a href="#"><li>Delivery Details</li></a>
                            <a href="#"><li>Terms & Conditions</li></a>
                            <a href="#"><li>Privacy Policy</li></a>
                        </ul>
                    </div>
                    <div className="fot-box">
                        <h3>Resources</h3>
                        <ul>
                            <a href="#"><li>Free eBook</li></a>
                            <a href="#"><li>Development Tutorial</li></a>
                            <a href="#"><li>How to - Blog</li></a>
                            <a href="#"><li>Youtube Playlist</li></a>
                        </ul>
                    </div>
                    <div className="fot-box">
                        <h3>Link</h3>
                        <ul>
                            <a href="#"><li>Free eBooks</li></a>
                            <a href="#"><li>Development Tutorial</li></a>
                            <a href="#"><li>How to - Blog</li></a>
                            <a href="#"><li>Youtube Playlist</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        <div className="fot-social">
            <p> &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                <div className="social-fot">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>

                </div>
         </div>
    
    </section>
</footer>

  )
}

export default FooterSection