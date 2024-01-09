<script>
  import Saos from "saos";

  import { HeartRegular, HeartSolid } from 'svelte-awesome-icons';

  let heartRegularFlg = true;
  let heartAnimateFlg = false;
  let messageFlg = false;
  let clickCount = 0;

  const heartToggle = () => {
    heartRegularFlg = !heartRegularFlg
  };

  const heartClick = () => {
    heartAnimateFlg = !heartAnimateFlg;
    incrementClickCount();

    messageFlg = true;
    setTimeout(() => {
      messageFlg = false;
    }, 2000);
  };

  const incrementClickCount = async () => {
    await fetch('https://script.google.com/macros/s/AKfycbxk3EQHJ-icBJggxq85YOZkniBaFUWm-v9efZ1ZrpL6ZforXMz0xO9hz8rTnm0lres/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clickCount: clickCount + 1 }),
      mode: 'no-cors',
    });
  };


</script>

<section class="sm:w-[980px] px-[24px] sm:px-0 pt-[64px] pb-14 mx-auto">
  <div class="relative">
    <Saos
      once={true}
      animation={'fade-in-bottom 0.6s ease-out   both'}
    >
    <div class="relative">
      <div
        class="absolute left-1/2 -translate-x-1/2 p-2 min-w-[232px] max-w-full text-nice bg-white border-2  border-nice rounded-lg after:z-10 px-4
          after:absolute after:-bottom-[10.5px] after:left-1/2 after:-translate-x-1/2 after:border-t-nice after:border-t-2 after:border-solid
          after:border-r-nice after:bg-white after:border-r-2 after:w-[16px] after:h-[17px] after:rotate-[135deg] after:-skew-x-[18deg]
          after:-skew-y-[18deg]
          {messageFlg ? 'animate-fade-up' : 'opacity-0'}"
      >
        <p class="font-bold text-[14px]">
          いいね! ありがとうございます!
        </p>
      </div>
    </div>

    <button
      class="text-nice rounded-full border-[3px] border-solid border-nice
        w-[136px] h-[136px] flex flex-col justify-center items-center gap-y-1
        group sm:hover:bg-nice sm:hover:cursor-pointer duration-300 mx-auto mt-7"
      tabindex="0"
      aria-pressed="false"
      on:mouseenter={heartToggle}
      on:mouseleave={heartToggle}
      on:click={heartClick}
      class:animate-nice-active={heartAnimateFlg}
    >
      <div
      >
        <HeartRegular
          class="w-[34px] h-[31px] hover:scale-[1.15]
            duration-150 {heartRegularFlg ? 'block' : 'hidden'} sm:focus:outline-none"
        />
        <HeartSolid
          class="w-[34px] h-[31px] text-white hover:scale-[1.15]
            duration-150 {heartRegularFlg ? 'hidden' : 'block'} sm:focus:outline-none"
        />
      </div>
      <p class="text-[18px] font-bold group-hover:text-white">いいね!</p>
    </button>
  </Saos>
  </div>
</section>
