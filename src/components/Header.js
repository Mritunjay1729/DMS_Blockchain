import React from "react"

const Header = (props) =>{
  return (<div>
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meme of the Day
        </a>
        <ul className="navbar-abv px-3">
          <li className="nav-item-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">{props.account}</small>
          </li>
        </ul>
      </nav>
  </div>)
}

export default Header