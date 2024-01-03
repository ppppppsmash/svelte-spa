<script>
  export let linkText;
  export let linkUrl;
</script>

<section>
  <div class="flex justify-center items-center text-center gap-x-2">
    <a
      class="relative text-black font-bold"
      href={linkUrl}
    >
      { linkText }
    </a>
    <div class="relative">
      <div class="absolute -bottom-1.5 left-3 w-2.5 h-2.5 border-r-solid border-solid z-30
        border-t-2 border-t-black border-r-2 border-r-black rotate-45 border-r-solid">
      </div>
      <div class="absolute z-10 bg-arrow w-8 h-8 rounded-full -bottom-4 left-0.5">
      </div>
    </div>
  </div>
</section>