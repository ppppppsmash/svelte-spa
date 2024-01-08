<script>
  import Breadcrumb from './Breadcrumb.svelte';
  import SiteMap from './SiteMap.svelte';

  const sitemaps1 = [
    {
      name: '利用規約',
      url: '/info/terms.html'
    },
    {
      name: 'プライバシーポリシー',
      url: '/info/privacy.html'
    },
    {
      name: 'アフィリエイトプログラム',
      url: 'https://partner.zba.jp/zubatasp/'
    },
    {
      name: '利用お問い合わせ規約',
      url: '/contact/'
    },
    {
      name: 'サイトマップ',
      url: '/info/sitemap.html'
    },
    {
      name: 'English',
      url: '/en/'
    },
  ];

  const sitemaps2 = [
    {
      name: 'ニュース',
      url: '/news/'
    },
    {
      name: '電子公告',
      url: '/ir/'
    }
  ];

  const sitemaps3 = [
    {
      name: 'サービス',
      url: '/service/'
    },
    {
      name: '保険',
      url: '/service/insurance/'
    },
    {
      name: '生活',
      url: '/service/life/'
    },
    {
      name: '自動車',
      url: '/service/car/'
    },
    {
      name: '教育',
      url: '/service/education/'
    },
    {
      name: 'シニア',
      url: '/service/senior/'
    },
    {
      name: '金融',
      url: '/service/finance/'
    },
    {
      name: '法人',
      url: '/service/business/'
    },
  ];

  const sitemaps4 = [
    {
      name: '企業情報',
      url: '/company/'
    },
    {
      name: '代表メッセージ',
      url: '/company/message.html/'
    },
    {
      name: '会社概要・アクセス',
      url: '/company/profile.html'
    },
    {
      name: '経営理念',
      url: '/company/management-philosophy.html'
    },
    {
      name: '事業内容',
      url: '/company/business.html'
    },
    {
      name: '沿革',
      url: '/company/history.html'
    },
    {
      name: 'ISO27001',
      url: '/company/iso27001.html'
    },
    {
      name: '情報セキュリティ基本方針',
      url: '/company/security.html'
    },
    {
      name: 'ソーシャルメディアポリシー',
      url: '/company/social.html'
    },
  ];

  const sitemaps5 = [
    {
      name: '採用情報',
      url: '/recruit/'
    },
    {
      name: '新卒採用',
      url: '/recruit/new-graduates.html'
    },
    {
      name: 'キャリア採用',
      url: '/recruit/mid-career.html'
    },
    {
      name: '社内制度',
      url: '/recruit/institution.html'
    },
    {
      name: 'よくある質問',
      url: '/recruit/faq.html'
    },
    {
      name: '数字で見るWebCrew',
      url: '/recruit/infographic.html'
    }
  ];
</script>

<section class="w-full bg-white">
  <Breadcrumb />

  <div class="sm:w-[980px] mx-auto px-[24px] sm:px-0 pt-[43px] text-sm">
    <div class="pb-[26px] border-b-[1px] border-solid border-line">
      <div class="flex justify-between items-center mb-[30px]">
        <a
          class="w-[136px]"
          href="/"
        >
          <img
            class="w-full h-auto"
            src="images/main-logo.png"
            alt="logo"
          >
        </a>

        <div class="flex gap-x-2">
          <a
            href="/"
            class="w-[30px]"
          >
            <img
              class="w-full h-auto"
              src="images/sns_facebook.png"
              alt="logo"
            >
          </a>
          <a
            href="/"
            class="w-[30px]"
          >
            <img
              class="w-full h-auto"
              src="images/sns_twitter.png"
              alt="logo"
            >
          </a>
        </div>
      </div>

      <SiteMap elements={sitemaps1} />
    </div>

    <div class="py-[22px]">
      <SiteMap
        all={true}
        elements={sitemaps2}
      />
    </div>

    <div class="pb-[22px]">
      <SiteMap
        first={true}
        elements={sitemaps3}
      />
    </div>

    <div class="pb-[22px]">
      <SiteMap
        first={true}
        elements={sitemaps4}
      />
    </div>

    <div class="pb-[22px]">
      <SiteMap
        first={true}
        elements={sitemaps5}
      />
    </div>
  </div>
</section>