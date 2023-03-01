import { graphql } from 'gatsby';

export const DatoCMS = graphql`
  fragment BlockListContent on DatoCmsListContent {
    title
    content {
      ... on DatoCmsPage {
        title
        slug
        model{
          apiKey
        }
        descriptionCard
        imageCard {
          gatsbyImageData(width: 500, height: 430)
          url
        }
      }
    }
  }
  fragment BlockNarrativeBlock on DatoCmsNarrativeBlock {
    __typename
    id
    title
    pretitle
    alignment
    textContent
    backgroundColor
    verticalCtas
    sectionTitle
    video {
      source {
        url
        thumbnailUrl
        providerUid
      }
      preview {
        gatsbyImageData(width: 500, height: 500)
        alt
      }
    }
    image {
      gatsbyImageData(width: 800, height: 800)
      alt
      url
    }
    xlImage: image {
      gatsbyImageData(width: 1200)
      alt
      url
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
              model {
                apiKey
              }
            }
            ... on DatoCmsProduct {
              slug
              model {
                apiKey
              }
            }
            ... on DatoCmsPost {
              slug
              model {
                apiKey
              }
            }
          }
        }
      }
    }
  }
  fragment BlockTextColumn on DatoCmsTextColumn {
    __typename
    id
    title
    titleAlignment
    backgroundColor
    introduction
    columns {
      id
      title
      text
      icon{
        url
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
    backgroundColor
    whiteBox
    titleInsideBox
    descriptionInsideBox
    visual
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
      ... on DatoCmsTabPost {
        __typename
        titleTab
        pretitle
        post {
          ... on DatoCmsPost {
            title
            slug
            summary
            model {
              apiKey
            }
            image {
              gatsbyImageData(width: 500, height: 430)
              url
            }
          }
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
              gatsbyImageData(width: 500, height: 430)
              url
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
                  model {
                    apiKey
                  }
                }
                ... on DatoCmsProduct {
                  slug
                  model {
                    apiKey
                  }
                }
                ... on DatoCmsPost {
                  slug
                  model {
                    apiKey
                  }
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
                  model {
                    apiKey
                  }
                }
                ... on DatoCmsProduct {
                  slug
                  model {
                    apiKey
                  }
                }
                ... on DatoCmsPost {
                  slug
                  model {
                    apiKey
                  }
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
    alignment
    logos {
      ... on DatoCmsLogo {
        id
        name
        url
        icon {
          gatsbyImageData(width: 300)
          url
          alt
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
              model {
                apiKey
              }
            }
            ... on DatoCmsProduct {
              slug
              model {
                apiKey
              }
            }
            ... on DatoCmsPost {
              slug
              model {
                apiKey
              }
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
      link: mainLink {
        id
        url
        label
        content {
          ... on DatoCmsPage {
            slug
            id
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
            id
          }
        }
      }
      megaMenu {
        ... on DatoCmsMegaMenu {
          tabs {
            ... on DatoCmsMegaMenuTab {
              title
              description
              link: mainLink {
                ... on DatoCmsGlobalLink {
                  url
                  label
                  content {
                    ... on DatoCmsPage {
                      title
                      slug
                      model {
                        apiKey
                      }
                    }
                    ... on DatoCmsProduct {
                      title
                      slug
                      model {
                        apiKey
                      }
                    }
                    ... on DatoCmsPost {
                      title
                      slug
                      model {
                        apiKey
                      }
                    }
                  }
                }
              }
              groupLink {
                title
                links {
                  ... on DatoCmsGlobalLink {
                    label
                    url
                    content {
                      ... on DatoCmsPage {
                        slug
                        model {
                          apiKey
                        }
                      }
                      ... on DatoCmsProduct {
                        slug
                        model {
                          apiKey
                        }
                      }
                      ... on DatoCmsPost {
                        slug
                        model {
                          apiKey
                        }
                      }
                    }
                  }
                }
                mainLink {
                  ... on DatoCmsGlobalLink {
                    label
                    url
                    content {
                      ... on DatoCmsPage {
                        slug
                        model {
                          apiKey
                        }
                      }
                      ... on DatoCmsProduct {
                        slug
                        model {
                          apiKey
                        }
                      }
                      ... on DatoCmsPost {
                        slug
                        model {
                          apiKey
                        }
                      }
                    }
                  }
                }
              }
              labelHighlight
              highlightedContent {
                ... on DatoCmsPage {
                  title
                  summary: description
                  slug
                  model {
                    apiKey
                  }
                  image {
                    gatsbyImageData(width: 300, height: 150)
                    alt
                  }
                }
                ... on DatoCmsPost {
                  title
                  summary: summary
                  slug
                  model {
                    apiKey
                  }
                  image {
                    gatsbyImageData(width: 300, height: 150)
                    alt
                  }
                }
                ... on DatoCmsProduct {
                  title
                  summary: description
                  slug
                  model {
                    apiKey
                  }
                  image {
                    gatsbyImageData(width: 300, height: 150)
                    alt
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  fragment BlockListMember on DatoCmsListMember {
    __typename
    id
    backgroundColor
    detailedViewOfTheMembers
    title
    model {
      apiKey
    }
    members {
      slug
      name
      positionMember
      image {
        gatsbyImageData(width: 240, height: 290)
        url
        alt
      }
      socialLinks {
        url
        socialNetwork
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
              model {
                apiKey
              }
            }
            ... on DatoCmsProduct {
              slug
              model {
                apiKey
              }
            }
            ... on DatoCmsPost {
              slug
              model {
                apiKey
              }
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
    toolSectionTitle
    description
    alignment
    backgroundColor
    products {
      ... on DatoCmsProduct {
        id
        model {
          apiKey
        }
        title
        slug
        imagePreview {
          gatsbyImageData
          url
        }
        descriptionPreview
      }
    }
  }
  fragment BlockBlogPost on DatoCmsBlogPost {
    __typename
    title
    textCta
    link {
      label
      id
      ... on DatoCmsGlobalLink {
        url
        content {
          ... on DatoCmsPage {
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsProduct {
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsPost {
            slug
            model {
              apiKey
            }
          }
        }
      }
    }
    tagsToFilter {
      ... on DatoCmsTag {
        name
      }
    }
  }
  fragment PostCard on DatoCmsPost {
    id
    title
    slug
    date(formatString: "MMM D YYYY")
    model {
      apiKey
    }
    summary
    image {
      gatsbyImageData(width: 387, height: 259)
      url
    }
    tags {
      ... on DatoCmsTag {
        name
      }
    }
  }
  fragment BlockAccordion on DatoCmsAccordion {
    id
    items {
      id
      title
      text
    }
    __typename
  }
  fragment BlockIframeEmbed on DatoCmsIframeEmbed {
    id
    iframe
  }
  fragment BlockVideoEmbed on DatoCmsVideoEmbed {
    id
    video {
      source {
        url
        thumbnailUrl
        providerUid
      }
      preview {
        gatsbyImageData
      }
    }
  }
`;
