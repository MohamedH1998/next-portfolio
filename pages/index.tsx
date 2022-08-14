import type { NextPage } from "next"
import { ReactElement } from "react"
import CardImage from "../src/components/card-image"
import Hero from "../src/components/hero"
import Nav from "../src/components/nav"
import Blogs from "../src/containers/blogs"
import Portfolio from "../src/containers/portfolio"

interface Props {
  setTheme: (value: string) => void
  theme: string
  projects: any
  blogs: any
}

const Home = ({ setTheme, projects, blogs }: Props): ReactElement => {
  return (
    <>
      <Nav setTheme={setTheme} />
      <Hero />
      <Portfolio projects={projects} />
      <Blogs blogs={blogs} />
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const projectsQuery = encodeURIComponent('*[ _type == "projects" ]')
  const blogsQuery = encodeURIComponent('*[ _type == "blogs" ]')
  const projectsURL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${projectsQuery}`
  const blogsURL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${blogsQuery}`

  const projectsResult = await fetch(projectsURL)
  const projectsData = await projectsResult.json()
  const blogsResult = await fetch(blogsURL)
  const blogsData = await blogsResult.json()

  const hasProjects = projectsData.result || projectsData.result.length > 0
  const hasBlogs = !blogsData.result || blogsData.result.length

  if (!hasProjects && !hasBlogs) {
    return {
      props: {
        projects: [],
        blogs: []
      }
    }
  }
  if (hasProjects && !hasBlogs) {
    return {
      props: {
        projects: projectsData.result,
        blogs: []
      }
    }
  }
  if (!hasProjects && hasBlogs) {
    return {
      props: {
        projects: [],
        blogs: blogsData.result
      }
    }
  }

  return {
    props: {
      projects: projectsData.result,
      blogs: blogsData.result
    }
  }
}
