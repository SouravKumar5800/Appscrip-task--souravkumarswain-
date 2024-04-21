import React from "react";
import {Component} from 'react'
import "../src/App.css"
import ProductSection from "./ProductSection/index"


class Ecommerce extends Component{

  state = {
    isFilterOn :true,
    isArrowClicked:false,
    allProducts:[]
  }


  componentDidMount(){
    this.getProducts()
  }

  getProducts = async() => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    const filtereddata = data.map(eachData => ({
      productId : eachData.id,
      productImg : eachData.image,
      productName: eachData.title,
      isLiked:false,
    }))
    this.setState({allProducts:filtereddata})
  }
  
  toggleLikeButton = (productId) => {
    this.setState(prevState => ({
      allProducts : prevState.allProducts.map(eachProduct => {
        if(eachProduct.productId === productId) {
          return {...eachProduct,isLiked: !eachProduct.isLiked}
        }
        return eachProduct
      })
    }))
  }

  filterOnOffButton = () =>{
      this.setState(prevState => ({isFilterOn: !prevState.isFilterOn}))
  }
  clickArrowButton = () =>{
    this.setState((prevState) => ({isArrowClicked : !prevState.isArrowClicked}))
  }

  render(){
    const {isFilterOn,isArrowClicked,allProducts} = this.state 
    const filterText = isFilterOn ? "HIDE FILTER" : "SHOW FILTER"
    const arrowImg = isFilterOn ? "/navbar/arrow-left.png" : "/navbar/arrow-right.png"
    const displayFilterPanel = isFilterOn ? "" : "filter-panel-display"
    const displayFilter = isArrowClicked ? "":"display-filter"
    const arrowDownImg = isArrowClicked ? "/navbar/arrow-up.png" :  "/navbar/arrow-down.png"
    
    return(
      <>
        <div className = "bg-container">
          <nav className = "navbar-property">
            <div className = "dropdown-menu-property">
            <img src = "/navbar/dropdown-menu-logo.png" alt = "menuLogo" className = "menu-logo"/>
            </div>
            <div>
              <img src = "/navbar/websitelogo.png" alt = "websiteLogo"/>
            </div>
            <div  >
              <h1 className="title">LOGO</h1>
              
            </div>
            
            <div >
              <ul className = "menu-style">
                <li><img src = "/navbar/search-normal.png"  alt = "searchIcon"/></li>
                <li><img src = "/navbar/heart.png" alt = "heart"/></li>
                <li><img src = "/navbar/shopping-bag.png" alt = "shopping-bag"/></li>
                <li><img src = "/navbar/profile.png" alt = "profile" className = "display-navbar-icon"/></li>
                <li className = "display-navbar-icon">ENG <img src = "/navbar/arrow-down.png" alt = "arrow" /></li>
              </ul>
            </div>
          </nav>
          <div>
          <ul className = "options menu page-options">
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
              </ul>
              <div className = "mobile-menu">
                <h3 className = "mobile-home-button">HOME</h3>
                <p>|</p>
                <h3>SHOP</h3>
              </div>
          </div>

          <hr className = "horizontal-line"/>
          <div className = "title-section">
            <h2 className = "tag-line">DISCOVER OUR PRODUCTS</h2>
            <p className = "description">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
              Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
          <hr className = "horizontal-line"/>
          <div className = "product-filter-bar">
            <div className=" filter-container">
              <p className = "item-count">3425 ITEMS</p>
              <button className = "show-hide-filterbutton" type = "button" onClick = {this.filterOnOffButton}> <img src = {arrowImg} alt = "arrow-left"/>{filterText}</button>
            </div>
            <div className = "filter-for-mobile-view">
              <h3>FILTER</h3>
            </div>
            <div className = "filter-separator-for-mobile-view">
              <p>|</p>
            </div>
            <div className = "filter-dropdown-container">
            <select className="filter-dropdown">
              <option>RECOMEMDED</option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE:LOW TO HIGH</option>
              <option>PRICE:HIGH TO LOW</option>
            </select>
            </div>
            
          </div>
          <hr className = "horizontal-line"/>
          <div className = "product-section">
            <div className = {`filter-panel ${displayFilterPanel}`}>
                <input type = "checkbox" id = "customizble"/>
                <label htmlFor = "customizble" className = "filter-name">CUSTOMIZBLE</label>
                <hr className = "horizontal-line"/>
                <div>
                  <div className = "filter-arrow"><p className = "filter-name">IDEAL FOR </p> 
                  <button type = "button" className = "arrow-button" onClick = {this.clickArrowButton}><img src = {arrowDownImg} alt = "arrowDown"/></button></div>
                  <p>All</p>
                  <div className = {`filter-category-container ${displayFilter}`}>
                    <div>
                    <input type = "checkbox" id = "men"/>
                    <label htmlFor = "men" className = "filter-name">Men</label>
                    </div>
                  <div>
                  <input type = "checkbox" id = "women"/>
                  <label htmlFor = "women" className = "filter-name">Women</label>
                  </div>
                  <div>
                  <input type = "checkbox" id = "baby&kids"/>
                  <label htmlFor = "baby&kids" className = "filter-name">Baby&Kids</label>
                  </div>
                  </div>
                </div>
                <hr className = "horizontal-line"/>
                <>
                <div className = "filter-arrow"><p className = "filter-name">OCCASSION </p> 
                  <button type = "button" className = "arrow-button"><img src = {arrowDownImg} alt = "arrowDown"/></button>
                  </div>
                  <p>All</p>
                </>
                <hr className = "horizontal-line"/>
                <>
                <div className = "filter-arrow"><p className = "filter-name">WORK </p> 
                  <button type = "button" className = "arrow-button"><img src = {arrowDownImg} alt = "arrowDown"/></button>
                  </div>
                  <p>All</p>
                </>
                <hr className = "horizontal-line"/>
                <>
                <div className = "filter-arrow"><p className = "filter-name">FABRIC </p> 
                  <button type = "button" className = "arrow-button"><img src = {arrowDownImg} alt = "arrowDown"/></button>
                  </div>
                  <p>All</p>
                </>
                <hr className = "horizontal-line"/>
                <>
                <div className = "filter-arrow"><p className = "filter-name">SEGMENT </p> 
                  <button type = "button" className = "arrow-button"><img src = {arrowDownImg} alt = "arrowDown"/></button>
                  </div>
                  <p>All</p>
                </>
                <hr className = "horizontal-line"/>
                <>
                <div className = "filter-arrow"><p className = "filter-name">SUITABLE FOR </p> 
                  <button type = "button" className = "arrow-button"><img src = {arrowDownImg} alt = "arrowDown"/></button>
                  </div>
                  <p>All</p>
                </>
                <hr className = "horizontal-line"/>
                <>
                <div className = "filter-arrow"><p className = "filter-name">RAW MATERIALS </p> 
                  <button type = "button" className = "arrow-button"><img src = {arrowDownImg} alt = "arrowDown"/></button>
                  </div>
                  <p>All</p>
                </>
                <hr className = "horizontal-line"/>
                <>
                <div className = "filter-arrow"><p className = "filter-name">PATTERN </p> 
                  <button type = "button" className = "arrow-button"><img src = {arrowDownImg} alt = "arrowDown"/></button>
                  </div>
                  <p>All</p>
                </>
            </div>
            <div className="product-card-container">
              {allProducts.map(eachProduct => (
                    <ProductSection eachProduct = {eachProduct} key = {eachProduct.productId}
                    toggleLikeButton = {this.toggleLikeButton}/>
              ))}
            </div>
          </div>
          
        </div>
        <div className = "footer-bg-container">
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
          </div>
        </>
    )
  }
}

export default Ecommerce