<script>
  export let elements;
  export let first = false;
  export let all = false;
</script>

<nav>
  <ul class="flex gap-x-[22px] items-center">
    {#each elements as element}
    <li
      class="{first ? '[&_em]:first:text-primary [&_em]:first:font-bold [&_em]:first:text-lg' : ''}
        {all ? '[&_em]:text-primary [&_em]:font-bold [&_em]:text-lg' : ''}
      "
    >
      <a
        class="hover:opacity-50 text-sitemap"
        href="element.url"
      >
        <em class="not-italic text-[13px]">
          {element.name}
        </em>
      </a>
    </li>
    {/each}
  </ul>
</nav>