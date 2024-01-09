<script>
  import Breadcrumb from '../components/Footer/Breadcrumb.svelte';
  import Footer from '../components/Footer/Footer.svelte';

	import '../app.scss';
	import './styles.scss';
</script>

<div class="app">
	<main>
		<slot />
	</main>

  <Footer />
</div>
