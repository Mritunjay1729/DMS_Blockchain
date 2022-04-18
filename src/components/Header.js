import React from "react"

const Header = (props) =>{
  return (
    <nav className="navbar navbar-dark fixed bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand text-white col-sm-3 col-md-2 mr-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Document Management System (DMS)
        </a>
        <ul className="navbar-abv px-3">
          <span className="nav-item-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">{props.account}</small>
          </span>
        </ul>
      </nav>)
}

export default Header