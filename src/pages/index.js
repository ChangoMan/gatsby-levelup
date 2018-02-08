import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Img from "gatsby-image"

import Bio from '../components/Bio'

const BlogPost = ({node}) => {
    return (
        <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            border: '1px solid #ccc'
        }}>
            <h3><Link to={node.slug}>{node.title}</Link></h3>
            <p>{node.createdAt}</p>
            <div>
                <div>
                    <Img resolutions={node.image.resolutions}/>
                </div>
                <div>{node.content.childMarkdownRemark.excerpt}</div>
            </div>
        </div>
    )
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />

        <h2 className="mb-5">Blog Posts</h2>

        <div>
          {this.props.data.allContentfulBlogPost.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
        </div>

        <hr />

        <Bio />

      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query pageQuery {
      allContentfulBlogPost(
          filter: {
              node_locale: {eq: "en-US"}
          },
          sort: {
              fields: [createdAt], order: DESC
          }
      ) {
          edges {
              node {
                  id
                  title
                  slug
                  createdAt(formatString: "MMMM DD, YYYY")
                  image {
                        resolutions(width: 300) {
                            ...GatsbyContentfulResolutions
                        }
                    }
                  content {
                      childMarkdownRemark {
                          excerpt
                      }
                  }
              }
          }
      }
  }
`
