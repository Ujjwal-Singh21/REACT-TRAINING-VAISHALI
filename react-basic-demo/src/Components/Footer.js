import React, { Component } from 'react'

class Footer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='FooterClass'>
        <hr color='deeppink' size='5' />
        <marquee>
          <a> Abous Us </a>
          <a> Careers </a>
          <a> Contact us on phone: 044-4658798 & email: capgeminiIndia@pvtLtd </a>
          <b> @CopyRight of {this.props.companyName} </b>
        </marquee>
      </div>
    )
  }
}

export default Footer
