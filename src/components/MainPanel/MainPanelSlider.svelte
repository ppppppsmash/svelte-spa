<script lang="ts">
  import { onMount } from 'svelte';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import Logo from '../Logo/Logo.svelte'
  import Scroll from './ScrollEncourage.svelte';

  let sliderImages = [];
  let suffix_pc = "pc";
  let suffix_sp = "sp";
  const windowSize = () => {
    let windowWidth = window.innerWidth;
    let suffix = windowWidth > 640 ? suffix_pc : suffix_sp;

    sliderImages = Array.from({ length: 5 }, (_, i) => `images/top-slider_${i + 1}_${suffix}.png`);
  }

  onMount(() => {
    windowSize()
  })
</script>

<section class="h-screen">
  <Logo classProps="absolute top-6 left-1/2 z-30 sm:w-[250px] w-[206px] -translate-x-1/2" />

  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-white
    text-center w-[325px] sm:w-[712px]"
  >
    <div
      class="relative border-0 before:absolute before:left-0 before:top-0 before:w-8 before:h-20 before:border-2 before:border-b-0
      before:border-r-0 after:absolute after:right-0 after:bottom-0 after:w-8 after:h-20 after:border-2 after:border-t-0
      after:border-l-0 px-6 py-9
    "
    >
      <p class="text-[28px] sm:text-[40px] font-semibold title-outline leading-[1.3] mb-3 sm:mb-0">
        見えないものを<br class="block sm:hidden">見えるように
      </p>
      <p class="text-[28px] sm:text-[40px] font-semibold title-outline leading-[1.3]">
        わかりにくいものを<br class="block sm:hidden">わかりやすく
      </p>
    </div>
  </div>

  <Scroll />

  <div class="fixed top-0 left-0 -z-10 w-full h-full">
    {#if sliderImages.length}
    <Splide
      class="absolute top-0 left-0 w-full h-full overflow-hidden"
      aria-label="Main Visual"
      options={{
        rewind: true,
        type: 'fade',
        autoplay: true,
        pagination: false,
        arrows: false,
        isNavigation: false,
        drag: false,
        speed: 8000
      }}
    >
      <div class="absolute top-0 left-0 w-full h-screen opacity-50 z-10 bg-black" />

      {#each sliderImages as sliderImage}
      <SplideSlide class="relative sm:w-full h-full">
        <img
          class="w-full h-screen object-cover"
          src={sliderImage}
          alt="Webcrew inc. logo"
        />
      </SplideSlide>
      {/each}
    </Splide>
    {/if}
  </div>
</section>
