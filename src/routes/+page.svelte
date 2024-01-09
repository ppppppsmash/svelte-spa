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
	<title>ウェブクルーの宣言｜株式会社ウェブクルー</title>
	<meta name="description" content="株式会社ウェブクルーのビジネスを支える、経営理念・経営ビジョン・行動指針や、ビジネスモデルをご紹介します。" />
</svelte:head>

{#if showPrefaceLogo}
<PrefaceLogo />
{/if}

<MainPanelSlider />

<MainContents />
