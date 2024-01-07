<script>
  import Breadcrumb from '../components/Footter/Breadcrumb.svelte';

	import '../app.scss';
	import './styles.scss';
</script>

<div class="app">
	<main>
		<slot />
	</main>

  <Breadcrumb />
</div>

<style lang="scss">
</style>
