import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
    let query = gql`
        query content_view_6a9870cdc8f348ee874ea3b4a3c8b52d() {
methods(first: 100) {
id
slug
title
categories {
    title
}
template {
      url
    height
    width
}
}
}
    `

    return await hygraph.request(query);
}