<script>
  import * as d3 from 'd3';
  import { onMount } from 'svelte';

  let width = 600;
  let height = 600;
  let margin = 40;

  let radius = Math.min(width, height) / 2 - margin;

  const data = {
    insurance: { value: 27, label: '保険・金融', class: 'order-1 flex flex-nowrap' },
    life: { value: 24, label: '生活', class: 'order-3' },
    car: { value: 35, label: '自動車', class: 'order-5' },
    education: { value: 9, label: '教育', class: 'order-2 w-3/4' },
    senior: { value: 5, label: 'シニア', class: 'order-4 w-3/4' },
  };

  const colorPattern = ['#0A328A', '#4F7AD6', '#78A3FF', '#4CA0ED', '#45BFD6'];
  const color = d3
    .scaleOrdinal()
    .domain(['insurance', 'education', 'life', 'senior', 'car'])
    .range(colorPattern);

  const pie = d3
    .pie()
    .sort(null)
    .value((d) => d[1].value);
  const data_ready = pie(Object.entries(data));

  const arc = d3
    .arc()
    .innerRadius(radius)
    .outerRadius(radius * 0.8);

  let legendData = Object.keys(data);

  onMount(() => {
    const legend = d3
      .select('.legend')
      .selectAll('div')
      .data(legendData)
      .enter()
      .append('div')
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('margin-bottom', '8px')
      .attr('class', (d) => data[d].class);

    legend
      .append('div')
      .style('width', '12px')
      .style('height', '12px')
      .style('border-radius', '2px')
      .style('background-color', (d) => color(data[d]))
      .style('margin-right', '4px');

    legend
      .append('div')
      .attr('class', 'max-w-full w-10/12 flex justify-between')
      .html((d) => `${data[d].label} <span>${data[d].value}%</span>`);
  });
</script>

<section class="relative animate-fade-up animate-once">
  <svg
    {width}
    {height}
    viewBox='{-(width - 50) / 2}, {-(height - 50) / 2}, {width - 50}, {height - 50}'
    style:max-width='100%'
    style:height='auto'
  >
    <g class='chart-inner w-[500px] h-[500px]'>
      {#each data_ready as slice}
        <path d={arc(slice)} fill={color(slice.data[1].value)} />
      {/each}
    </g>
  </svg>

  <div class="absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
    <h3 class="text-primary text-[30px] sm:text-[42px] leading-7 sm:leading-10 font-medium">WebCrew Domain</h3>
    <p class="text-primary font-bold mt-2 text-[12px] sm:text-base">事業領域</p>
  </div>

  <div
    class="legend absolute w-[220px] sm:w-[265px] top-[65%] left-[55%] -translate-x-1/2 -translate-y-1/2
      grid grid-cols-2 text-[12px] sm:text-sm gap-x-2"
  />
</section>

<style>
  :global(body) {
    margin: 0;
  }
</style>
