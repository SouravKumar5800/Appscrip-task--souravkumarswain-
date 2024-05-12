import React from "react";
import {Component} from 'react'
import "../src/App.css"
import ProductSection from "./ProductSection/index"
import FooterSection from "./FooterSection"
import NavbarSection from "./NavbarSection"


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
          <div>
            <NavbarSection/>
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
          <FooterSection/>
          </div>
        </>
    )
  }
}

export default Ecommerce