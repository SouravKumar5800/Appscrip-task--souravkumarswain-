import "./index.css"

const NavbarSection = () => {
    return(
        <>
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
                <button className="option-button"><li>SHOP</li></button>
                <button className="option-button"><li>SKILLS</li></button>
                <button className="option-button"><li>STORIES</li></button>
                <button className="option-button"><li>ABOUT</li></button>
                <button className="option-button"><li>CONTACT US</li></button>
              </ul>
              <div className = "mobile-menu">
                <h3 className = "mobile-home-button">HOME</h3>
                <p>|</p>
                <h3>SHOP</h3>
              </div>
          </div>
        </>
    )
}
export default NavbarSection