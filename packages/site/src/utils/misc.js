// @flow
export function getDocMap(
  edges: Array<{
    node: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string
      }
    }
  }>
) {
  const docMap: { [string]: string } = {}
  edges.forEach(({ node }) => {
    docMap[node.fields.slug] = node.frontmatter.title
  })
  return docMap
}