export default function getQueryUrl(gql, slug) {
	return gql`
  query VisualThinking() {
            methods(where: {slug: "${slug}"}) {
                title
                template {
                url
                }
                description {
                    html
                }
    }
  }
  `;
}