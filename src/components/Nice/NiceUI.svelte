<script>
  import { HeartRegular, HeartSolid } from 'svelte-awesome-icons';

  let heartRegularFlg = true;
  const heartToggle = () => {
    heartRegularFlg = !heartRegularFlg
  };
</script>

<section class="sm:w-[975px] px-[24px] sm:px-0 pt-[64px] pb-14 sm:pt-[112px] mx-auto">
  <div class="flex justify-center">
    <div
      class="text-nice rounded-full border-[3px] border-solid border-nice
        w-[136px] h-[136px] flex flex-col justify-center items-center gap-y-1
        group hover:bg-nice hover:cursor-pointer duration-300 focus:animate-nice-active"
      tabindex="0"
      role="button"
      aria-pressed="false"
      on:mouseenter={heartToggle}
      on:mouseleave={heartToggle}
    >
      <div
      >
        <HeartRegular class="w-[34px] h-[31px] hover:scale-[1.15]
        duration-150 {heartRegularFlg ? 'block' : 'hidden'} focus:outline-none" />
        <HeartSolid class="w-[34px] h-[31px] text-white hover:scale-[1.15]
        duration-150 {heartRegularFlg ? 'hidden' : 'block'} focus:outline-none" />
      </div>
      <p class="text-[18px] font-bold group-hover:text-white">いいね!</p>
    </div>
  </div>
</section>