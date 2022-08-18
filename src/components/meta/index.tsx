import Head from "next/head"

interface Props {
  description: string
  title: string
  url: string
  summary: string
  creator: string
  image: string
}

const Meta = ({ description, title, url, summary, creator, image }: Props) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
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
    <meta name="twitter:creator" content={creator} />

    <link
      rel="apple-touch-icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
    />
    <meta property="og:image" content={image} />
    <meta name="twitter:image" content={image} />
    <link rel="canonical" href="" />
  </Head>
)

export default Meta
