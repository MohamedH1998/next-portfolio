import React from "react"
import { NextSeo } from "next-seo"
interface Props {
  description: string
  title: string
  url: string
  summary: string
  creator: string
  image: string
}

const Meta = ({ description, title, url, summary, creator, image }: Props) => (
  <NextSeo
    title={title}
    description={description}
    canonical="https://www.momito.co.uk"
    openGraph={{
      url: url,
      title: title,
      description: description,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: title,
          type: "image/png"
        },
        {
          url: image,
          width: 900,
          height: 800,
          alt: title,
          type: "image/jpeg"
        }
      ],
      site_name: "Mohamed"
    }}
    twitter={{
      handle: "@momito8_",
      site: "@momit8_",
      cardType: "summary_large_image"
    }}
    robotsProps={{
      nosnippet: true,
      notranslate: false,
      noimageindex: true,
      noarchive: true,
      maxSnippet: -1,
      maxImagePreview: "none",
      maxVideoPreview: -1
    }}
  />
)

export default Meta
