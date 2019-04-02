import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navlink extends Component {
  render() {
    return (
      <div className="navbar">
        <nav variant="pills" >
          <NavLink to='/portfolioListing'>
            <a className="navbar-brand" >Portfolio Listing</a>
          </NavLink>
          <NavLink to='/constituents'>
            <a className="navbar-brand" >Constituents</a>
          </NavLink>
        </nav>
      </div>
    )
  }
}
