import React from "react"
import { NextSeo, ArticleJsonLd } from "next-seo"
import Meta from "."
interface Props {
  description: string
  title: string
  url: string
  creator: string
  image: string
  date: string
  keywords: string
}

const BlogMeta = ({
  description,
  title,
  url,
  creator,
  image,
  date,
  keywords
}: Props) => (
  <>
    <Meta
      description={description}
      url={url}
      image={image}
      title={title}
      keywords={keywords}
    />
    <ArticleJsonLd
      type="Blog"
      url={url}
      title={`${title} | Freelance Web Dev | Momito`}
      images={[image]}
      authorName={creator}
      datePublished={date}
      description={description}
      keywords={keywords}
    />
  </>
)

export default BlogMeta
