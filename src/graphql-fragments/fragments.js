import { graphql } from 'gatsby'

export const DatoCMS = graphql`
  fragment BlockNarrativeBlock on DatoCmsNarrativeBlock{
    __typename
    id
    title
    pretitle
    alignment
    textContent
    backgroundColor
    image{
      gatsbyImageData(width:500, height:500)
      alt
    }
    ctas{
      title
      isButton
      link{
        ... on DatoCmsGlobalLink{
          label
          url
          content{
            ... on DatoCmsPage{
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
  fragment BlockTextHubspot on DatoCmsTextHubspotForm{
    __typename
    id
    text
    title
    hubspot{
      ... on DatoCmsHubspot{
        formId
        region
        portalId
      }
    }
  }
  fragment BlockTab on DatoCmsTab{
    __typename
    id
    items{
      id
      ... on DatoCmsTabItem{
        title
        titleTab
        testimonial{
          ... on DatoCmsTestimonial{
            quote
            author
            image{
              gatsbyImageData(width:300, height:400)
            }
          }
        }
      }
    }
  }
  fragment BlockLogos on DatoCmsLogosBlock{
    __typename
    id
    title
    intro
    backgroundColor
    logos{
      ... on DatoCmsLogo{
        id
        name
        url
        icon{
          gatsbyImageData
        }
      }
    }
    ctas{
      title
      link{
        ... on DatoCmsGlobalLink{
          label
          url
          content{
            ... on DatoCmsPage{
              slug
            }
          }
        }
      }
    }
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
