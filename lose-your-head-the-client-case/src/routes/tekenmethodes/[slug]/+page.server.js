import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({slug}) {
    let query = gql`
        query VisualThinking() {
            methods(where: {slug: "${slug}"}) {
                title
                template {
                url
    }
  }
}

    `;

    return await hygraph.request(query);
}