import React from 'react'
import { graphql } from 'gatsby'
import { StructuredText } from "react-datocms";
import Layout from "../components/Layout"
import SeoDatoCms from "../components/SeoDatoCms"
import formatDate from '../utils';
import GlobalImage from '../components/Global/GlobalImage/GlobalImage';

const Post = ({ data: { post } }) => {
  return (
    <Layout>
      <SeoDatoCms seo={post.seo} />
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <GlobalImage image={post.image} />
            </div>
            <div className="col-lg-6">
              <div className="info">
                {formatDate(post.meta.createdAt)} | {post.topic.name}
              </div>
              <h1>{post.title}</h1>
              {post.summary}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">

            <StructuredText data={post.content.value} />
            <div className="tags">
              {
                post.tags.length > 0 && post.tags.map(item => (<div>{item.name}</div>))
              }

            </div>
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
        meta{
          createdAt
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
        topic{
          ...on DatoCmsTag{
            name
          }
        }
        tags{
          ...on DatoCmsTag{
            name
          }
        }
      } 
  }
`