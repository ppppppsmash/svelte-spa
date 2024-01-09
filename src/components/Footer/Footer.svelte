<script>
  import Breadcrumb from './Breadcrumb.svelte';
  import SiteMap from './SiteMap.svelte';

  const sitemaps1 = [
    {
      name: '利用規約',
      url: 'https://www.webcrew.co.jp/info/terms.html'
    },
    {
      name: 'プライバシーポリシー',
      url: 'https://www.webcrew.co.jp/info/privacy.html'
    },
    {
      name: '情報セキュリティ基本方針',
      url: 'https://www.webcrew.co.jp/company/security.html'
    },
    {
      name: 'アフィリエイトプログラム',
      url: 'https://partner.zba.jp/zubatasp/'
    },
    {
      name: 'お問い合わせ',
      url: 'https://www.webcrew.co.jp/contact/'
    },
    {
      name: 'サイトマップ',
      url: 'https://www.webcrew.co.jp/info/sitemap.html'
    },
    {
      name: 'English',
      url: 'https://www.webcrew.co.jp/en/'
    },
  ];

  const sitemaps2 = [
    {
      name: 'ニュース',
      url: 'https://www.webcrew.co.jp/news/'
    },
    {
      name: '電子公告',
      url: 'https://www.webcrew.co.jp/ir/'
    }
  ];

  const sitemaps3 = [
    {
      name: 'サービス',
      url: 'https://www.webcrew.co.jp/service/'
    },
    {
      name: '保険',
      url: 'https://www.webcrew.co.jp/service/insurance/'
    },
    {
      name: '生活',
      url: 'https://www.webcrew.co.jp/service/life/'
    },
    {
      name: '自動車',
      url: 'https://www.webcrew.co.jp/service/car/'
    },
    {
      name: '教育',
      url: 'https://www.webcrew.co.jp/service/education/'
    },
    {
      name: 'シニア',
      url: 'https://www.webcrew.co.jp/service/senior/'
    },
    {
      name: '金融',
      url: 'https://www.webcrew.co.jp/service/finance/'
    },
    {
      name: '法人',
      url: 'https://www.webcrew.co.jp/service/business/'
    },
  ];

  const sitemaps4 = [
    {
      name: '企業情報',
      url: 'https://www.webcrew.co.jp/company/'
    },
    {
      name: '代表メッセージ',
      url: 'https://www.webcrew.co.jp/company/message.html/'
    },
    {
      name: '会社概要・アクセス',
      url: 'https://www.webcrew.co.jp/company/profile.html'
    },
    {
      name: '経営理念',
      url: 'https://www.webcrew.co.jp/company/management-philosophy.html'
    },
    {
      name: '事業内容',
      url: 'https://www.webcrew.co.jp/company/business.html'
    },
    {
      name: '沿革',
      url: 'https://www.webcrew.co.jp/company/history.html'
    },
    {
      name: 'ISO27001',
      url: 'https://www.webcrew.co.jp/company/iso27001.html'
    },
    {
      name: '情報セキュリティ基本方針',
      url: 'https://www.webcrew.co.jp/company/security.html'
    },
    {
      name: 'ソーシャルメディアポリシー',
      url: 'https://www.webcrew.co.jp/company/social.html'
    },
  ];

  const sitemaps5 = [
    {
      name: '採用情報',
      url: 'https://www.webcrew.co.jp/recruit/'
    },
    {
      name: '新卒採用',
      url: 'https://www.webcrew.co.jp/recruit/new-graduates.html'
    },
    {
      name: 'キャリア採用',
      url: 'https://www.webcrew.co.jp/recruit/mid-career.html'
    },
    {
      name: '社内制度',
      url: 'https://www.webcrew.co.jp/recruit/institution.html'
    },
    {
      name: 'よくある質問',
      url: 'https://www.webcrew.co.jp/recruit/faq.html'
    },
    {
      name: '数字で見るWebCrew',
      url: 'https://www.webcrew.co.jp/recruit/infographic.html'
    }
  ];
</script>

<section class="w-full bg-white">
  <Breadcrumb />

  <div class="sm:w-[980px] mx-auto px-0 pt-[43px] text-sm">
    <div class="grid grid-cols-1 pb-[26px] border-b-[1px] border-solid sm:border-line">
      <div class="flex justify-center sm:justify-between items-center mb-[30px] order-2 sm:order-1">
        <a
          class="w-[136px] hidden sm:block"
          href="/"
        >
          <img
            class="w-full h-auto"
            src="images/main-logo.png"
            alt="logo"
          >
        </a>

        <div class="flex gap-x-10 sm:gap-x-2 py-8 sm:py-0">
          <a
            href="/"
            class="w-[47px] h-[47px] sm:w-[30px] sm:h-[30px]"
          >
            <img
              class="w-full h-auto"
              src="images/sns_facebook.png"
              alt="logo"
            >
          </a>
          <a
            href="/"
            class="w-[47px] h-[47px] sm:w-[30px] sm:h-[30px]"
          >
            <img
              class="w-full h-auto"
              src="images/sns_twitter.png"
              alt="logo"
            >
          </a>
        </div>
      </div>

      <div class="order-1 sm:order-2">
        <SiteMap
          ThirdElementHidden={true}
          elements={sitemaps1}
        />
      </div>
    </div>

    <div class="hidden sm:block py-[22px]">
      <SiteMap
        all={true}
        elements={sitemaps2}
      />
    </div>

    <div class="hidden sm:block pb-[22px]">
      <SiteMap
        first={true}
        elements={sitemaps3}
      />
    </div>

    <div class="hidden sm:block pb-[22px]">
      <SiteMap
        first={true}
        elements={sitemaps4}
      />
    </div>

    <div class="hidden sm:block pb-[22px]">
      <SiteMap
        first={true}
        elements={sitemaps5}
      />
    </div>
  </div>
</section>