import type { NextPage } from "next"
import { ReactElement } from "react"
import Hero from "../src/components/hero"
import Nav from "../src/components/nav"
import Portfolio from "../src/container/portfolio"

interface Props {
  setTheme: (value: string) => void
  theme: string
}

// not need to pass these in as props, use a hook -> don't 'daisy chain'
const Home = ({ setTheme, theme }: Props): ReactElement => {
  return (
    <div>
      <Nav setTheme={setTheme} />
      <Hero />
      <Portfolio />
    </div>
  )
}

export default Home
