import Head from "next/head"

// { description, title, url, summary, creator, icon, image }

const Meta = () => (
  <Head>
    <title></title>
    {/* <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content={title} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content={summary} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content={title} />
    <meta name="twitter:creator" content={creator} /> */}
    <meta name="description" content="desc" />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content="title" />
    <meta name="og:description" property="og:description" content="yo" />
    <meta property="og:site_name" content="site name" />
    <meta property="og:url" content="www.google.com" />
    <meta name="twitter:card" content="summary is a vibe" />
    <meta name="twitter:title" content="tit le" />
    <meta name="twitter:description" content="desccc" />
    <meta name="twitter:site" content="woop" />
    <meta name="twitter:creator" content="mohh" />
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
    />
    <link
      rel="apple-touch-icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
    />
    <meta
      property="og:image"
      content="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    />
    <meta
      name="twitter:image"
      content="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    />
    <link rel="canonical" href="" />
  </Head>
)

export default Meta
