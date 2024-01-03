<script>
  export let icon, iconAlt, title, titleEn, value, unit, annotation;
</script>

<section>
  <div class="flex flex-col w-full sm:w-[300px] h-[305px] sm:h-[360px] rounded-lg text-center
    shadow-[3px_3px_8px_3px_rgba(10,51,138,0.2)]">
    <div class="w-full mx-auto mt-4">
      <img
        class="max-w-[74px] w-full mx-auto"
        src={icon}
        alt={iconAlt}
      >
    </div>

    <div class="text-black mt-4">
      <h3 class="font-bold text-[22px]">{title}</h3>
      <p class="mt-1 font-bold text-[14px]">{titleEn}</p>
    </div>

    <div class="flex justify-center items-end mt-2 gap-x-2 text-primary box-border">
      <p class="text-[84px]">{value}<span class="font-bold text-[24px]">{unit}</span></p>
    </div>

    {#if annotation.length}
    <div class="sm:mt-6">
      <p class="text-[12px] text-black">{annotation}</p>
    </div>
    {/if}
  </div>
</section>