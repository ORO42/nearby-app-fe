<script>
	import { onMount } from 'svelte';
	import { getAuth0Client, login, logout } from '$lib/auth';
	import { user } from '$lib/stores/authStore.js';

	let auth0;

	onMount(async () => {
		auth0 = await getAuth0Client();
	});

	async function handleLogin() {
		await login();
	}

	async function handleLogout() {
		await logout();
		user.set(null);
	}
</script>

{#if $user}
	<p>Welcome, {$user.name}!</p>
	<button class="text-white" on:click={handleLogout}>Log out</button>
{:else}
	<button class="text-white" on:click={handleLogin}>Log in</button>
{/if}
