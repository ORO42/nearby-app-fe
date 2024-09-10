import { browser } from '$app/environment';
import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client;

export async function getAuth0Client() {
	if (browser && !auth0Client) {
		auth0Client = await createAuth0Client({
			domain: import.meta.env.AUTH0_DOMAIN,
			clientId: import.meta.env.AUTH0_CLIENT_ID,
			authorizationParams: {
				redirect_uri: import.meta.env.AUTH0_REDIRECT_URI
			}
		});
	}
	return auth0Client;
}

export async function login() {
	const client = await getAuth0Client();
	if (client) {
		await client.loginWithRedirect();
	}
}

export async function logout() {
	const client = await getAuth0Client();
	if (client) {
		await client.logout();
	}
}
