import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Grehg`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
          }}
        />
        <p>Sup boii, my name is Grehg and I've got legs.</p>
      </div>
    )
  }
}

export default Bio
