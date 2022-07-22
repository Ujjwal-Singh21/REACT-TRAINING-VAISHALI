import React, { Component } from 'react'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>
          <marquee> -- Welcome to {this.props.companyName} in {this.props.country} Location --  </marquee>
          <hr color='royalblue' size= '5'/>
        </h2>
      </div>
    )
  }
}

export default Header