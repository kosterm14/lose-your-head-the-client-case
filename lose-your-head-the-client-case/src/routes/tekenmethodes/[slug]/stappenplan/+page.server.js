import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

import getQueryUrl from '$lib/queries/url.js';

export async function load ({ params }) {
	const { slug2 } = params;
	const query = getQueryUrl(gql, slug2);

    return await hygraph.request(query);
}