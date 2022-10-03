import React from 'react'
import { graphql } from 'gatsby'
import { StructuredText } from "react-datocms";
import Layout from "../components/Layout"
import SeoDatoCms from "../components/SeoDatoCms"
import { GatsbyImage } from "gatsby-plugin-image"

const Post = ({ data: { post } }) => {
  return (
    <Layout>
      <SeoDatoCms seo={post.seo} />
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <GatsbyImage image={post.image?.gatsbyImageData} alt={post.image?.alt} />
            </div>
            <div className="col-lg-6">
              <h1>{ post.title }</h1>
              { post.summary }
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            
            <StructuredText data={post.content.value}/>
          </div>
          <div className="col-lg-5">
            Related
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const PostQuery = graphql`
  query PostById($id: String) {
      post: datoCmsPost(id: { eq: $id }) {
        seo: seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        id
        title
        slug
        content{
          value
        }
        image{
          gatsbyImageData(width:600, height:400)
          alt
        }
        summary
      } 
  }
`