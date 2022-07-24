import type { NextPage } from "next"
import { ReactElement } from "react"
import Example from "../components/example"
import Nav from "../components/nav"

interface Props {
  setTheme: (value: string) => void
}

const Home = ({ setTheme }: Props): ReactElement => {
  return (
    <div>
      <Nav setTheme={setTheme} />
    </div>
  )
}

export default Home
