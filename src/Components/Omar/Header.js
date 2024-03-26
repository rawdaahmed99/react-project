import React from "react";
function Header(){
    return(
        <header>
          
        <div className="header">
          <div className="container">
          <img className="logo" src="images/logo.png" alt="" />
            <div className="links">
              <span className="icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Service">Service</a></li>
            <li><a href="/Port">PORTFOLIO</a></li>
            <li><a href="#ABOUT">ABOUT</a></li>
            <li><a href="/News">NEWS</a></li>
            <li><a href="/Contact">CONTACT</a></li>

          </ul>
            </div>
          </div>
        </div>
        </header>
    
    )
}
export default Header