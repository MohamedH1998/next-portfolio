import React from "react"
import { NextSeo } from "next-seo"
interface Props {
  description?: string
  url: string
  image: string
  title?: string
  keywords: string
}

const Meta = ({ description, url, image, title, keywords }: Props) => {
  const updatedTitle = title
    ? `${title} | Freelance Web Dev | Momito`
    : "Freelance Web Developer in London & UK | Momito"
  return (
    <NextSeo
      title={updatedTitle}
      description={description}
      canonical="https://www.momito.co.uk"
      openGraph={{
        url: url,
        title: updatedTitle,
        description: description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: updatedTitle,
            type: "image/png"
          },
          {
            url: image,
            width: 900,
            height: 800,
            alt: updatedTitle,
            type: "image/jpeg"
          }
        ],
        site_name: updatedTitle
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
      additionalMetaTags={[
        {
          name: "keywords",
          content: keywords
        }
      ]}
    />
  )
}

export default Meta
