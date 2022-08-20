import React from "react"
import { NextSeo } from "next-seo"
interface Props {
  description?: string
  url: string
  image: string
}

const Meta = ({ description, url, image }: Props) => {
  const title = "Freelance Web Developer in London & UK | Mohamed"
  return (
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
        site_name: title
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
}

export default Meta
