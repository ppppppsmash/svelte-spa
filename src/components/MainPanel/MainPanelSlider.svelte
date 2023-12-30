<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';

  const sliderImages = [
    'images/top-slider_1_pc.png',
    'images/top-slider_2_pc.png',
    'images/top-slider_3_pc.png',
    'images/top-slider_4_pc.png',
    'images/top-slider_5_pc.png',
  ]
</script>

<section class="h-screen">
  <div class="fixed top-0 left-0 -z-10 w-full h-full">
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
      {#each sliderImages as sliderImage}
      <SplideSlide class="relative w-full h-full">
        <img
          class="w-full h-screen object-cover top-0 left-0"
          src={sliderImage}
          width="1280"
          height="610"
          alt="Webcrew inc. logo"
        />
      </SplideSlide>
      {/each}
    </Splide>
  </div>
</section>
