const path = require(`path`);

// const createPages = async (graphql, actions ) => {
//   // 1. Get template
//   const pageTemplate = path.resolve('./src/templates/Page.js')
//   // 2. Query all Pages
//   const { data } = await graphql(`
//     query {
//       pages: allDatoCmsPage {
//         nodes {
//           title
//           slug
//           blocks{
//             __typename
//           }
//         }
//       }
//     }
//   `);

//   // 3. Loop through Pages and create a page
//   data.pages.nodes.forEach((node) => {
//     actions.createPage({
//       path: `/${node.slug}`,
//       component: pageTemplate,
//     })
//   });
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const templates = {
      page: path.resolve('./src/templates/page.js'),
    }
    resolve(
      graphql(
        `
          {
            allDatoCmsPage{
              nodes{
                title
                slug
                id
                blocks{
                  __typename
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // create the pages
        const pages = result.data.allDatoCmsPage.nodes

        for (page of pages) {
          createPage({
            path: page.slug,
            component: templates.page,
            context: {
              slug:page.slug,
              id: page.id,
            },
          })
        }

      })
    )
  })
}
