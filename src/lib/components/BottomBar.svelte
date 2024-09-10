<script>
	import { goto } from '$app/navigation';

	export let slug = 'abc';

	let selected = 0;
</script>

<div
	class="absolute bottom-0 flex w-full flex-row border-t-[0.5px] border-white border-opacity-10 p-1"
>
	<button
		class="w-full rounded-md p-2 text-lg text-white {selected == 0 ? 'tabSelected' : ''}"
		on:click={() => {
			selected = 0;
			goto('/explore');
		}}>Explore</button
	>
	<button
		class="w-full rounded-md p-2 text-lg text-white {selected == 1 ? 'tabSelected' : ''}"
		on:click={() => {
			selected = 1;
			goto(`/profile/${slug}`);
		}}>My Profile</button
	>
</div>

<style lang="postcss">
	.tabSelected {
		@apply bg-white bg-opacity-5;
	}
</style>
