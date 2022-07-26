import { ReactElement } from "react"
import Hero from "../src/components/hero"
import Nav from "../src/components/nav"
import Blogs from "../src/containers/blogs"
import Portfolio from "../src/containers/portfolio"
import { client } from "../sanity.server"
import Meta from "../src/components/meta"
import moment from "moment"

interface Props {
  setTheme: (value: string) => void
  theme: string
  projects: any
  blogs: any
}

const Home = ({ setTheme, projects, blogs }: Props): ReactElement => {
  return (
    <>
      <Meta
        description="Freelance Web Developer in London & UK solving complex business problems with clean, scalable solutions - delivered as a modern and customisable website."
        url="momito.co.uk"
        image="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        keywords="freelance web developer london, momito"
      />
      <Nav setTheme={setTheme} />
      <Hero />
      <Portfolio projects={projects} />
      <Blogs blogs={blogs} />
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const projects = await client.fetch('*[ _type == "projects" ]')
  const blogs = await client.fetch('*[ _type == "blogs" ]')
  const hasProjects = projects || projects.length > 0
  const hasBlogs = !blogs || blogs.length

  const formattedBlogs = blogs.map((blog: any) => ({
    ...blog,
    timestamp: moment(blog.publishedAt).format("LT - MMM DD, YYYY")
  }))
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
        projects: projects,
        blogs: []
      }
    }
  }
  if (!hasProjects && hasBlogs) {
    return {
      props: {
        projects: [],
        blogs: formattedBlogs
      }
    }
  }

  return {
    props: {
      projects: projects,
      blogs: formattedBlogs
    },
    revalidate: 172800
  }
}
