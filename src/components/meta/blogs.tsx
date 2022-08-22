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
}

const BlogMeta = ({ description, title, url, creator, image, date }: Props) => (
  <>
    <Meta description={description} url={url} image={image} title={title} />
    <ArticleJsonLd
      type="Blog"
      url={url}
      title={title}
      images={[image]}
      authorName={creator}
      datePublished={date}
      description={description}
    />
  </>
)

export default BlogMeta
