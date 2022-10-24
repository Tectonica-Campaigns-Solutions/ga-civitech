import React from "react";
import { StaticQuery, graphql } from "gatsby";
import GlobalImage from "../../Global/GlobalImage/GlobalImage";

const LatestPost = ({block}) => {
  return <StaticQuery
      query={graphql`
              query latestPost {
                  allDatoCmsPost {
                      nodes{
                        title
                        image{
                          gatsbyImageData
                        }
                        tags{
                          ... on DatoCmsTag{
                            name
                          }
                        }
                      }
                  }
              }
      `}
      render={data => {
       return (
          <div className={`row ${block.backgroundColor}`}>
            <h2>{block.title}</h2>
            {
              data.allDatoCmsPost.nodes.map(item => {
                return (
                  <>
                  <div className="tags">
                    { item.tags.map(tag => {
                      return (
                        <span>{tag.name}</span>
                      )
                    })}
                  </div>
                     <GlobalImage image={item.image} />
                     <div>{item.title }</div>
                  </>
                  
                )
              })
            }
          </div>
        )
      }}
  />;
}

export default LatestPost;