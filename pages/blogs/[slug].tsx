import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import imageUrlBuilder from "@sanity/image-url"
import Post from "../../src/containers/posts"
import Nav from "../../src/components/nav"
import { client } from "../../sanity.server"
import Meta from "../../src/components/meta"

interface Props {
  setTheme: (value: string) => void
  body: any
  description: string
  title: string
  mainImage: string
  topic: string
  avatar: any
  date: string
  slug: string
}

const Blog = ({
  body,
  description,
  title,
  mainImage,
  setTheme,
  topic,
  avatar,
  date,
  slug
}: Props) => {
  const [avatarURL, setAvatarUrl] = useState<string>("")
  useEffect(() => {
    const imgURLBuilder = imageUrlBuilder({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
      dataset: "production"
    })

    setAvatarUrl(imgURLBuilder.image(avatar) as unknown as string)
  }, [avatar])

  return (
    <>
      <Meta
        description={description}
        title={title}
        url={`momito.co.uk/blogs/${slug}`}
        summary={description}
        creator={avatar.author}
        image={mainImage}
      />
      <Nav setTheme={setTheme} hasToggle={false} />
      <Post
        avatar={avatarURL}
        body={body}
        description={description}
        title={title}
        mainImage={mainImage}
        topic={topic}
        author={avatar.author}
        date={date}
      />
    </>
  )
}

export default Blog

export const getStaticProps = async ({ params }: any) => {
  const { slug } = params
  if (!slug) {
    return {
      notFound: true
    }
  }

  const data = await client.fetch(
    `*[ _type == "blogs" && slug.current == "${slug}" ]`
  )

  const formattedData = data[0]
  console.log(formattedData)
  if (!formattedData) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      body: formattedData.body,
      description: formattedData.description,
      title: formattedData.title,
      mainImage: formattedData.mainImage,
      topic: formattedData.topic,
      avatar: formattedData.avatar,
      date: formattedData.publishedAt,
      slug: formattedData.slug.current
    }
  }
}

export async function getStaticPaths() {
  const blogs = await client.fetch(`*[ _type == "blogs" ]`)

  const ids = blogs.map((blog: any) => blog.slug.current)

  const pathsWithParams = ids.map((id: string) => ({ params: { slug: id } }))

  return {
    paths: pathsWithParams,
    fallback: false
  }
}
