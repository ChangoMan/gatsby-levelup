import React from 'react'
import { Container } from 'react-responsive-grid'

import '../assets/scss/main.scss'

import { rhythm, scale } from '../utils/typography'

import Header from '../components/Header'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <Container
        className="site-container"
      >
        <Header />
        {children()}
      </Container>
    )
  }
}

export default Template
