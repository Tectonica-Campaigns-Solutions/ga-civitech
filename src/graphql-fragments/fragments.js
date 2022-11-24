import { graphql } from 'gatsby';

export const DatoCMS = graphql`
  fragment BlockNarrativeBlock on DatoCmsNarrativeBlock {
    __typename
    id
    title
    pretitle
    alignment
    textContent
    backgroundColor
    image {
      gatsbyImageData(width: 500, height: 500)
      alt
    }
    ctas {
      title
      isButton
      link {
        ... on DatoCmsGlobalLink {
          label
          url
          content {
            ... on DatoCmsPage {
              slug
            }
          }
        }
      }
    }
  }
  fragment BlockGridStat on DatoCmsGridStat {
    __typename
    id
    title
    text
    backgroundColor
    stats {
      title
      text
      icon {
        url
      }
    }
  }
  fragment BlockLatestPost on DatoCmsLatestPost {
    __typename
    title
    backgroundColor
  }
  fragment BlockTextHubspot on DatoCmsTextHubspotForm {
    __typename
    id
    text
    title
    hubspot {
      ... on DatoCmsHubspot {
        formId
        region
        portalId
      }
    }
  }
  fragment BlockTab on DatoCmsTab {
    __typename
    id
    backgroundColor
    items {
      ... on DatoCmsPost {
        __typename
        title
        slug
        summary
        image {
          gatsbyImageData
        }
        model {
          apiKey
        }
      }
      ... on DatoCmsTabItem {
        __typename
        title
        titleTab
        description
        intro
        headline
        text
        testimonial {
          ... on DatoCmsTestimonial {
            quote
            author
            image {
              gatsbyImageData(width: 400, height: 500)
            }
          }
        }
        ctas {
          title
          isButton
          link {
            ... on DatoCmsGlobalLink {
              label
              url
              content {
                ... on DatoCmsPage {
                  slug
                }
              }
            }
          }
        }
        links {
          title
          isButton
          link {
            ... on DatoCmsGlobalLink {
              label
              url
              content {
                ... on DatoCmsPage {
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
  fragment BlockLogos on DatoCmsLogosBlock {
    __typename
    id
    title
    intro
    backgroundColor
    logos {
      ... on DatoCmsLogo {
        id
        name
        url
        icon {
          gatsbyImageData
        }
      }
    }
    ctas {
      title
      isButton
      link {
        ... on DatoCmsGlobalLink {
          label
          url
          content {
            ... on DatoCmsPage {
              slug
            }
          }
        }
      }
    }
  }
  fragment Navigation on DatoCmsNavigation {
    title
    navigationItems {
      id
      label
      isButton
      icon {
        url
      }
      mainLink {
        id
        url
        label
        content {
          ... on DatoCmsPage {
            slug
          }
        }
      }
      links {
        id
        url
        label
        content {
          ... on DatoCmsPage {
            slug
          }
        }
      }
    }
  }
  fragment BlockListMember on DatoCmsListMember {
    __typename
    id
    members {
      name
      positionMember
      image {
        gatsbyImageData
      }
    }
    ctas {
      title
      isButton
      link {
        ... on DatoCmsGlobalLink {
          label
          url
          content {
            ... on DatoCmsPage {
              slug
            }
          }
        }
      }
    }
  }
  fragment BlockRelatedProduct on DatoCmsRelatedProduct {
    __typename
    id
    title
    description
    alignment
    products {
      ... on DatoCmsProduct {
        model {
          apiKey
        }
        title
        slug
        imagePreview {
          gatsbyImageData
        }
        descriptionPreview
      }
    }
  }
  fragment BlockBlogPost on DatoCmsBlogPost {
    __typename
    title
    tagsToFilter {
      ... on DatoCmsTag {
        name
      }
    }
  }
`;
