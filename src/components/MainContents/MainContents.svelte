<script>
  import TopChallenge from './TopChallenge.svelte';
  import Philosophy from './Philosophy.svelte';
  import Vision from './Vision.svelte';
  import Guideline from './Guideline.svelte';
  import Business from './Business.svelte';
  import Link from '../Link/Link.svelte';
  import Achievements from './Achievements.svelte';
  import NiceUi from '../Nice/NiceUI.svelte';
</script>

<section class="bg-white">
  <div class="sm:w-[975px] px-[24px] sm:px-0 pt-[64px] sm:pt-[112px] mx-auto">
    <TopChallenge />
    <Philosophy />
    <Vision />
    <Guideline />

    <div class="my-11 sm:my-24">
      <Link
        linkUrl="#"
        linkText="代表の思いはこちら"
      />
    </div>
  </div>

  <Business />

  <Achievements />

  <Link
    linkUrl="#"
    linkText="その他の数値情報はこちら"
  />

  <NiceUi />
</section>