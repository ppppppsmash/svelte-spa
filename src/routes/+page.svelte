<script>
	import { onMount } from 'svelte';

  import PrefaceLogo from '../components/Logo/PrefaceLogo.svelte';
  import MainPanelSlider from '../components/MainPanel/MainPanelSlider.svelte';
  import CountUp from '../components/Count/CountUp.svelte';
  import MainContents from '../components/MainContents/MainContents.svelte';

  let showPrefaceLogo = true;

  const removePrefaceLogo = () => {
    showPrefaceLogo = false;
  };

  onMount(() => {
    setTimeout(removePrefaceLogo, 2400);
  })
</script>

<svelte:head>
	<title>Statement</title>
	<meta name="description" content="Webcrew 新規コーポーレートページ" />
</svelte:head>

{#if showPrefaceLogo}
<PrefaceLogo />
{/if}

<MainPanelSlider />

<MainContents />
