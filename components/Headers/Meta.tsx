import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <title>一番鶏　｜ 町田</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta
        name="description"
        content="東京町田にある「一番鶏」公式ホームページです。"
      />
      <meta name="format-detection" content="telephone=no" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>

      {/* <!-- ogp --> */}
      <meta property="og:site_name" content="一番鶏 | 町田" />
      <meta
        property="og:url"
        content="ichibandori-machida-kazuyazama.vercel.app"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="一番鶏 | 町田" />
      <meta
        property="og:description"
        content="東京町田にある「一番鶏」公式ホームページです。"
      />
      <meta property="og:image" content="/favicon/apple-touch-icon.png" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="/favicon/apple-touch-icon.png" />
      <meta
        name="twitter:description"
        content="東京町田にある「一番鶏」公式ホームページです。"
      />
      <meta name="twitter:image:src" content="/favicon/apple-touch-icon.png" />
    </Head>
  );
};

export default Meta;
