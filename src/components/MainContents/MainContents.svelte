<script>
  import TopChallenge from './TopChallenge.svelte';
  import Philosophy from './Philosophy.svelte';
  import Vision from './Vision.svelte';
  import Guideline from './Guideline.svelte';
  import Link from '../Link/Link.svelte';
</script>

<section class="bg-white">
  <div class="sm:w-[975px] px-[24px] sm:px-0 py-[64px] sm:py-[112px] mx-auto">
    <TopChallenge />
    <Philosophy />
    <Vision />
    <Guideline />
    <Link
      linkUrl="#"
      linkText="代表の思いはこちら"
    />
  </div>
</section>