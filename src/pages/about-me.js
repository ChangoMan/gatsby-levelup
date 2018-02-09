import React from 'react'
import Link from 'gatsby-link'

class AboutMe extends React.Component {

  constructor(props) {
    super();
    this.state = {
      grehgQuotes : [
        "Just f@#$ed up your whole squad",
        "I was once a child model",
        "What's Gooch",
        "I hate him (referring to Eric)",
        "I know jiu jitsu",
        "I will destroy you",
        "It's Wednesday My Duuudes"
      ],
      selectedQuote : ''
    }
  }

  generateQuote = () => {
    this.setState({
      selectedQuote: this.state.grehgQuotes[Math.floor(Math.random()*this.state.grehgQuotes.length)]
    })
  }

  render() {

    return (
      <div>
        <h1 className="mb-5">About Grehg</h1>

        <h3 className="mb-5">{this.state.selectedQuote}</h3>

        <p className="mb-5"><button className="btn btn-primary" onClick={this.generateQuote}>Grehg Me</button></p>

        <hr />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit orci vitae velit egestas, convallis consequat risus ullamcorper. Donec efficitur tincidunt arcu, non aliquet tortor blandit ut. Proin pharetra luctus eleifend. Phasellus tincidunt dictum dolor, vel efficitur ex. Proin a cursus diam. Morbi fringilla arcu et auctor fringilla. Mauris auctor lectus quis magna gravida varius. Donec ornare justo vulputate ex consectetur, nec efficitur sem feugiat. Duis diam odio, mattis hendrerit ipsum sed, auctor scelerisque enim. Vestibulum laoreet eget risus et sagittis. Fusce mattis orci vitae augue commodo tempor. Phasellus dignissim sapien vel nunc rutrum pretium. Suspendisse potenti. Etiam at orci vel massa dignissim ullamcorper quis eu leo.</p>
        <p>Pellentesque dignissim euismod leo, ut finibus ex pretium eu. Proin scelerisque auctor erat, pretium pulvinar urna feugiat a. Curabitur lacinia sagittis odio, quis sagittis turpis vehicula nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse luctus convallis ex, eu sagittis enim pharetra non. In eu nibh sapien. Vivamus magna mauris, dapibus sit amet dolor a, suscipit efficitur tellus.</p>
        <p>Phasellus nec urna ac dolor elementum dictum et fermentum nibh. Curabitur commodo magna non urna dignissim eleifend. Cras id nunc vitae nulla egestas ultricies a a nulla. Nulla vel sollicitudin justo. Maecenas consectetur, nulla id laoreet pulvinar, massa neque pulvinar tortor, eu dictum velit nibh vel lectus. Phasellus vel aliquam enim. Cras volutpat erat congue pharetra dapibus. Donec congue lectus ligula, quis euismod erat porttitor et. Pellentesque sit amet arcu tincidunt, dapibus dui in, mollis mauris.</p>

      </div>
    )
  }
}

export default AboutMe