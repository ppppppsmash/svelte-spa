<script>
	import Header from './Header.svelte';
	import '../app.scss';
	import './styles.scss';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
</style>
