<script>
	import '../app.css';
	import BottomBar from '../lib/components/BottomBar.svelte';
	import { onMount } from 'svelte';
	import { getAuth0Client } from '$lib/auth';
	import { user } from '$lib/stores/authStore.js';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let auth0;

	onMount(async () => {
		auth0 = await getAuth0Client();
		if (auth0) {
			const isAuthenticated = await auth0.isAuthenticated();

			if (isAuthenticated) {
				const userProfile = await auth0.getUser();
				user.set(userProfile);
				goto('/explore');
				console.log($user.id);
			} else {
				goto('/sign-in');
				console.log('not authenticated');
			}
		}
	});
</script>

<slot></slot>

{#if $user && ($page.url.pathname.startsWith('/explore') || $page.url.pathname.startsWith('/profile'))}
	<BottomBar />
{/if}
