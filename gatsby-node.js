const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const templates = {
      page: path.resolve('./src/templates/page.js'),
      post: path.resolve('./src/templates/post.js'),
      product: path.resolve('./src/templates/product.js'),
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
                topic{
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
            },
          });
        }
      })
    );
  });
};
