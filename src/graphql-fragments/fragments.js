import { graphql } from 'gatsby'

export const DatoCMS = graphql`
  fragment BlockNarrativeBlock on DatoCmsNarrativeBlock{
    __typename
    id
    title
    alignment
    textContent
    backgroundColor
    image{
      gatsbyImageData(width:500, height:500)
      alt
    }
    ctas{
      title
      id
      link{
        ...on DatoCmsGlobalLink{
					content{
						...on DatoCmsPage{
							slug
            }
          }
        }
      }
    }
  }
  fragment BlockGridStat on DatoCmsGridStat{
    __typename
    id
    stats{
      title
      text
      icon{
        url
      }
    }
  }
  fragment BlockTab on DatoCmsTab{
    __typename
    id
  }
  fragment Navigation on DatoCmsNavigation{
    title
    navigationItems{
      id
      label
      isButton
      icon{
        url
      }
      mainLink{
        id
        url
        label
        content{
          ...on DatoCmsPage{
            slug
          }
        }
      }
      links{
        id
        url
        label
        content{
          ...on DatoCmsPage{
            slug
          }
        }
      }
    }
  }
          
`
 