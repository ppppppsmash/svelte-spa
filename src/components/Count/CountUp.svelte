<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { tick } from 'svelte';

  export let start;
  export let end;
  export let duration;

  const count = writable(start);

  onMount(() => {
    const step = (end - start) / duration;

    const tickHandler = async () => {
      count.update((value) => value + step);

      if ((step > 0 && $count < end) || (step < 0 && $count > end)) {
        await tick();
        tickHandler();
      }
    };

    tickHandler();
  });

  onDestroy(() => {
    count.set(end);
  });
</script>

<p>{$count}</p>
