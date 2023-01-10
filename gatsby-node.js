const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createSlice } = actions;

  //slices api
  createSlice({
    id: 'header',
    component: path.resolve(`./src/components/Header.js`),
  });
  createSlice({
    id: `footer`,
    component: path.resolve(`./src/components/Global/Footer/Footer.js`),
  });

  return new Promise((resolve, reject) => {
    const templates = {
      page: path.resolve('./src/templates/page.js'),
      post: path.resolve('./src/templates/post.js'),
      product: path.resolve('./src/templates/product.js'),
      people: path.resolve('./src/templates/people.js'),
    };

    resolve(
      graphql(
        `
          {
            pages: allDatoCmsPage {
              nodes {
                title
                slug
                id
                blocks {
                  __typename
                }
              }
            }
            posts: allDatoCmsPost {
              nodes {
                title
                slug
                id
                topic {
                  id
                  originalId
                }
                featured
              }
            }
            products: allDatoCmsProduct {
              nodes {
                title
                slug
                id
              }
            }
            members: allDatoCmsTeamMember {
              nodes {
                id
                slug
              }
            }
            globalSettings: allDatoCmsGlobalSetting {
              nodes {
                codeId
                value
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // create the pages
        const pages = result.data.pages.nodes;
        const posts = result.data.posts.nodes;
        const products = result.data.products.nodes;
        const members = result.data.members.nodes;
        const globalSettings = result.data.globalSettings.nodes;

        for (page of pages) {
          createPage({
            path: page.slug,
            component: templates.page,
            context: {
              slug: page.slug,
              id: page.id,
            },
          });
        }

        for (post of posts) {
          createPage({
            path: `/post/${post.slug}`,
            component: templates.post,
            context: {
              slug: post.slug,
              id: post.id,
              topic: post.topic.originalId,
              featured: post.featured,
              globalSettings,
            },
          });
        }

        for (product of products) {
          createPage({
            path: `/product/${product.slug}`,
            component: templates.product,
            context: {
              slug: product.slug,
              id: product.id,
              globalSettings,
            },
          });
        }

        for (member of members) {
          createPage({
            path: `/people/${member.slug}`,
            component: templates.people,
            context: {
              id: member.id,
              slug: member.slug,
            },
          });
        }
      })
    );
  });
};
