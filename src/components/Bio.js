import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: '1rem',
        }}
      >
        <img
          src={profilePic}
          alt={`Grehg`}
          style={{
            marginRight: '1rem',
            marginBottom: 0,
          }}
        />
        <h3 style={{marginTop: '2rem'}}>Sup boii, my name is Grehg and I've got legs.</h3>
      </div>
    )
  }
}

export default Bio
