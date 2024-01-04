<script>
  import DonutChart from '../Chart/DonutChart.svelte';
  import Link from '../Link/Link.svelte';
</script>

<section
  class="relative py-20 w-full mx-auto !bg-center bg-cover sm:!bg-cover !bg-no-repeat"
  style="background: linear-gradient(rgba(255, 255, 255, .9), rgba(255, 255, 255, .9)), url('images/business-bg.png')"
>
  <div class="sm:w-[975px] px-[24px] sm:px-0 mx-auto z-50">
    <div class="sm:grid grid-cols-4">
      <div class="col-span-3 col-start-2 lg:w-[736px]">
        <div class="text-center sm:flex-row-reverse sm:flex sm:justify-start sm:items-center sm:gap-x-4">
          <h2 class="text-primary font-light text-[74px] sm:text-[145px]">
            Business
          </h2>
          <div class="mt-1 sm:mt-8 mb-10 sm:mb-0">
            <p class="text-primary">事業</p>
            <div class="relative w-8 mx-auto mt-1 border-b-2 text-secondary before:absolute before:w-4 before:border-b-2
              before:-bottom-0.5 sm:before:left-0 before:h-[inherit] before:text-primary before:z-30" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        class="relative border-0 before:absolute before:left-0 before:top-0 before:w-8 before:h-20 before:border-2 before:border-b-0
        before:border-r-0 before:border-primary after:border-primary after:absolute after:right-0 after:bottom-0 after:w-8
        after:h-20 after:border-2 after:border-t-0 after:border-l-0 px-7 py-9
      "
      >
        <div class="font-bold">
          <p class="text-primary text-[18px] sm:text-[24px] sm:leading-[1.3] leading-[1.5] mb-3">
            生活者と企業のニーズをつなげる、<br class="block sm:hidden">持続可能なサイクル設計
          </p>

          <p class="text-black font-medium mt-6 leading-[2] tracking-wide sm:tracking-normal">
            私たちのサービスは、生活者と企業のニーズをつなぐ架け橋として、双方に価値のある繋がりを提供しています。
            人々の生活に密着した多様なサービス運営を通じて、生活者の行動やニーズを把握し、それを開発や営業、マーケティング戦略に活かすことで、
            持続的な価値提供サイクルを実現しています。
          </p>
        </div>
      </div>

      <div class="mt-8 hidden sm:block sm:w-[925px] mx-auto">
        <img class="w-full" src="images/business-contribution_pc.png" alt="">
      </div>

      <div class="my-8 block sm:hidden w-[270px] mx-auto">
        <img class="w-full" src="images/business-contribution-service_value_sp.png" alt="">
      </div>

      <div class="sm:grid sm:mt-[100px] grid-cols-2 gap-x-14">
        <div class="col-span-1">
          <div
            class="relative border-0 before:absolute before:left-0 before:top-0 before:w-8 before:h-20 before:border-2 before:border-b-0
            before:border-r-0 before:border-primary after:border-primary after:absolute after:right-0 after:bottom-0 after:w-8
            after:h-20 after:border-2 after:border-t-0 after:border-l-0 px-7 py-9"
          >
            <div class="sm:font-bold font-semibold">
              <p class="text-primary text-[18px] sm:text-[24px] leading-[1.5] mb-3">
                人びとのライフステージに寄りそ<br class="block sm:hidden">うサービスを展開しています
              </p>

              <p class="text-black sm:font-medium font-normal mt-6 leading-[2] tracking-wide sm:tracking-normal">
                私たちの事業は、人生のあらゆる場面で「課題」をかかえる人たちに向けたものです。
                進学や学校生活になやむ若者、引越しや手続きに負担を感じる人、自宅や車など大型資産をはじめて売却する人、
                親の介護問題にぶつかる家族、資産形成の手段がわからない人...そんな困っている人々へ、
                さまざまなパートナー企業と一緒に「解決」を目指します。
              </p>

              <div class="hidden sm:flex justify-start mt-12">
                <Link
                  linkUrl="#"
                  linkText="運営サービスの詳細はこちら"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <DonutChart />
        </div>

        <div class="flex sm:hidden justify-center mt-12">
          <Link
            linkUrl="#"
            linkText="運営サービスの詳細はこちら"
          />
        </div>
      </div>
    </div>

  </div>
</section>