import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import './index.scss';

function BlogPost() {
  
  const data = useStaticQuery(graphql`
    query allPosts {
      posts:allDatoCmsPost{
        nodes{
          meta {
            createdAt(formatString: "MMMM D, YYYY")
          }
          title
          topic {
            ... on DatoCmsTag {
              name
            }
          }
          tags {
            ... on DatoCmsTag {
              name
            }
          }
        }
      }
    }
  `);
  return (
    <div className="blog-post">
      <div className="container">
        <h2>Title</h2>
        {
          data.posts.nodes.map(item => {
            return (
              <div>
                { item.meta.createdAt}
                <h3>{ item.title }</h3>
                {
                  item.tags && item.tags.length > 0 && item.tags.map(item => <div>{item.name}</div>)
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BlogPost