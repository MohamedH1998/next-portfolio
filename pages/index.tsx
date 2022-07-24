import type { NextPage } from "next"
import { ReactElement } from "react"
import Hero from "../src/components/hero"
import Nav from "../src/components/nav"

interface Props {
  setTheme: (value: string) => void
  theme: string
}

const Home = ({ setTheme, theme }: Props): ReactElement => {
  return (
    <div>
      <Nav setTheme={setTheme} />
      <Hero bgColor={theme} />
    </div>
  )
}

export default Home
