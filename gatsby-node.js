const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {data} = await graphql(`
    {
      studies:allAirtable(filter: { table: { eq: "Case Studies" } }) {
        nodes {
          data {
            slug
          }
        }
      }
    }
  `);

  data.studies.nodes.forEach(study => {
    createPage({
      path: `/${study.data.slug}`,
      component: path.resolve(`src/templates/portfolio-template.jsx`),
      context: {
        slug: study.data.slug,
      },
    })
  })
}