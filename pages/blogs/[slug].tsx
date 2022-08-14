import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import BlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import Post from "../../src/containers/posts"
import Nav from "../../src/components/nav"

interface Props {
  setTheme: (value: string) => void
}

const Blog = ({ body, description, title, image, setTheme }: any) => {
  const [imageUrl, setImageUrl] = useState("")

  const router = useRouter()

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "tl80kdlo",
      dataset: "production"
    })

    setImageUrl(imgBuilder.image(image))
  }, [image])

  // return (
  //   <div className="">
  //     <h1>{title}</h1>
  //     {imageUrl && <img src={imageUrl} />}
  //     <BlockContent blocks={body} />
  //     <BlockContent blocks={description} />
  //   </div>
  // )

  return (
    <>
      <Nav setTheme={setTheme} hasToggle={false} />
      <Post />
    </>
  )
}

export default Blog

export async function getStaticProps(context: { params: any }) {
  const { slug } = context.params

  if (!slug) {
    return {
      notFound: true
    }
  }
  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${slug}" ]`
  )
  const url = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`
  const result = await fetch(url)
  const data = await result.json()
  const formattedData = data.result[0]
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
      image: formattedData.mainImage
    }
  }
}

export async function getStaticPaths() {
  const data = {
    blogs: [{ id: "my-first-developer-role" }]
  }

  const ids = data.blogs.map(blog => blog.id)
  const pathsWithParams = ids.map(id => ({ params: { slug: id } }))

  return {
    paths: pathsWithParams,
    fallback: true
  }
}
