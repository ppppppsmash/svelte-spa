<script>
  export let elements;
  export let first = false;
  export let all = false;
  export let hiddenOrder = 0;
</script>

<nav>
  <ul
    class="w-full flex flex-wrap gap-x-[1px] gap-y-[2px] sm:gap-x-[22px] sm:gap-y-0
      items-center justify-between sm:justify-start
      {hiddenOrder != 0 ? `sm:[&>*:nth-child(3)]:hidden` : ''}"
  >
    {#each elements as element}
    <li
      class="{first ? '[&_em]:first:text-primary [&_em]:first:font-bold [&_em]:first:text-lg' : ''}
        {all ? '[&_em]:text-primary [&_em]:font-bold [&_em]:text-lg' : ''}
        w-[49.8%] sm:w-auto text-center bg-primary sm:bg-transparent py-5 sm:py-0 box-border
      "
    >
      <a
        class="hover:opacity-50 text-white sm:text-sitemap box-border"
        href={element.url}
      >
        <em class="not-italic text-[13px]">
          {element.name}
        </em>
      </a>
    </li>
    {/each}
  </ul>
</nav>