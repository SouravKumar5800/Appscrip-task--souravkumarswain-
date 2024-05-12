import "./index.css"

const FooterSection = () => {
    return(
        <>
        <div className="footer-first-section">
            <div>
              <h3 className = "white-text-color">BE THE FIRST TO KNOW</h3>
              <p className = "white-text-color">Sign up for updates from mettā muse.</p>
              <div>
                <input type = "text" placeholder="Enter your e-mail..." className = "subscribe-box"/>
                <button type = "button" className = "subscribe-button">SUBSCRIBE</button>
              </div>
              <hr className="display-horizontal-line"/>
            </div>
            
            <div className = "footer-first-section-second-column">
              <h3 className = "white-text-color">CONTACT US</h3>
              <p className = "white-text-color footer-paragraph">+44 221 133 5360</p>
              <p className = "white-text-color footer-paragraph">customercare@mettamuse.com</p>
              <hr className="display-horizontal-line"/>
              <h3 className = "white-text-color">CURRENCY</h3>
              <div className = "dollar-container"><img src = "/navbar/United States of America (US).png" alt = "usaflag"/><p className = "white-text-color footer-paragraph">+USD</p></div>
              <p className = "white-text-color footer-paragraph mobile-view-text">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          
            </div>
            </div>
            <hr className = "horizontal-line white-text-color"/>
            <div className = "footer-first-section">
              <div className="footer-mob-view">
                <div className="footer-mob-option-view">
                <h3 className = "white-text-color">mettā muse</h3>
                <img src = "navbar/down-arrow-white.png" alt = "arrow-down"/>
                </div>
                <hr className="display-horizontal-line"/>
              </div>
              <div className="mobile-view-text">
                <h3 className = "white-text-color">mettā muse</h3>
                <p className = "white-text-color footer-paragraph">About Us</p>
                <p className = "white-text-color footer-paragraph">Stories</p>
                <p className = "white-text-color footer-paragraph">Artisans</p>
                <p className = "white-text-color footer-paragraph">Boutiques</p>
                <p className = "white-text-color footer-paragraph">Contact Us</p>
                <p className = "white-text-color footer-paragraph">EU Compliances Docs</p>
              </div>
              <div>
              <div className="footer-mob-view">
                <div className="footer-mob-option-view">
                <h3 className = "white-text-color">Quick Links</h3>
                <img src = "navbar/down-arrow-white.png" alt = "arrow-down"/>
                </div>
                <hr className="display-horizontal-line"/>
              </div>
              <div className="mobile-view-text">
                <h3 className = "white-text-color">Quick Links</h3>
                <p className = "white-text-color footer-paragraph">Orders & Shipping</p>
                <p className = "white-text-color footer-paragraph">Join/Login as a Seller</p>
                <p className = "white-text-color footer-paragraph">Payment & Pricing</p>
                <p className = "white-text-color footer-paragraph">Return & Refunds</p>
                <p className = "white-text-color footer-paragraph">FAQs</p>
                <p className = "white-text-color footer-paragraph">Privacy Policy</p>
                <p className = "white-text-color footer-paragraph">Terms & Conditions</p>
                </div>
              </div>
              <div>
              <div className="footer-mob-view">
                <div className="footer-mob-option-view">
                <h3 className = "white-text-color">Follow Us</h3>
                <img src = "navbar/down-arrow-white.png" alt = "arrow-down"/>
                </div>
                <hr className="display-horizontal-line"/>
              </div>
                <div className="mobile-view-text">
                <h3 className = "white-text-color">Follow Us</h3>
                <div>
                  <img src = "/navbar/instagram-logo.png" alt = "instagram"/>
                  <img src = "/navbar/linkedin-logo.png" alt = "linkedin"/>
                </div>
                </div>
                <h3 className = "white-text-color">mettā muse Accepts</h3>
                  <img className = "logo-property" src = "/navbar/g-pay-logo.png" alt = "g-pay"/>
                  <img className = "logo-property" src = "/navbar/visa-logo.png" alt = "master-card"/>
                  <img className = "logo-property" src = "/navbar/paypal-logo.png" alt = "paypal"/>
                  <img className = "logo-property" src = "/navbar/amex-logo.png" alt ="amex"/>
                  <img className = "logo-property" src = "/navbar/apple-pay.png" alt = "applepay"/>
                  <img className = "logo-property" src = "/navbar/phonepe-logo.png" alt = "phonepe"/>
              </div>
            </div>
            </>
    )
}

export default FooterSection