<script>
  import Saos from "saos";

  import AchievementsCard from "./Achievements/AchievementsCard.svelte";

  const cardContents = [
    {
      icon: 'images/icon_founded-year.png',
      alt: '創業年 Founded year',
      title: '創業年',
      titleEn: 'Founded Year',
      value: '1999',
      unit: '年',
      annotation: ''
    },
    {
      icon: 'images/icon_partners.png',
      alt: '提携パートナー数 Business Partners',
      title: '提携パートナー数',
      titleEn: 'Business Partners',
      value: '894',
      unit: '社',
      annotation: ''
    },
    {
      icon: 'images/icon_users.png',
      alt: '累計利用者数 Users',
      title: '累計利用者数',
      titleEn: 'Users',
      value: '2000',
      unit: '万人',
      annotation: ''
    },
    {
      icon: 'images/icon_web-sites.png',
      alt: '運営サイト数 Web Sites',
      title: '運営サイト数',
      titleEn: 'Web Sites',
      value: '56',
      unit: 'サイト',
      annotation: ''
    },
    {
      icon: 'images/icon_growth.png',
      alt: '売上高成長率 Sales Growth',
      title: '売上高成長率',
      titleEn: 'Sales Growth',
      value: '130',
      unit: '%',
      annotation: '※2018年度と2022年度の実績を比較'
    },
    {
      icon: 'images/icon_growth.png',
      alt: '営業利益成長率',
      title: '営業利益成長率',
      titleEn: 'Operating Income Growth Rate',
      value: '204',
      unit: '%',
      annotation: '※2018年度と2022年度の実績を比較'
    },
  ];

  let countupComplete = 0;
  const totalCards = 6; // カードの総数

  const handleCountupComplete = () => {
    countupComplete++;
    if (countupComplete === totalCards) {
      console.log('All countups are complete!');
    }
  };
</script>

<section class="sm:w-[980px] px-[24px] sm:px-0 pt-[64px] pb-14 sm:pt-[112px] mx-auto">
  <Saos
    once={true}
    animation={'fade-in-bottom 1.2s ease-out   both'}
  >
    <div>
      <div class="lg:w-[736px]">
        <div class="text-center sm:flex sm:justify-start sm:items-center sm:gap-x-4">
          <h2 class="text-primary font-light text-[74px] sm:text-[145px] leading-[52px] sm:leading-normal">
            Achieve<br class="block sm:hidden">ments
          </h2>
          <div class="mt-8 sm:mt-8 mb-10 sm:mb-0">
            <p class="text-primary">実績</p>
            <div class="relative w-8 mx-auto mt-1 border-b-2 text-secondary before:absolute before:w-4 before:border-b-2
              before:-bottom-0.5 sm:before:left-0 before:h-[inherit] before:text-primary before:z-30" />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-0 sm:gap-x-6 gap-y-8">
          {#each cardContents as cardContent}
            <AchievementsCard
              icon={cardContent.icon}
              iconAlt={cardContent.alt}
              title={cardContent.title}
              titleEn={cardContent.titleEn}
              value={cardContent.value}
              unit={cardContent.unit}
              annotation={cardContent.annotation}
              on:countup-complete={handleCountupComplete}
            />
          {/each}
        </div>
    </div>
  </Saos>
</section>