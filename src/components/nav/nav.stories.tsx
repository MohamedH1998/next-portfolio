import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import useState from "storybook-addon-state"

import Nav from "./index"

export default {
  title: "Nav / Nav",
  component: Nav
} as ComponentMeta<typeof Nav>
const Template: ComponentStory<typeof Nav> = () => {
  const [theme, setTheme] = useState("light", "lightTheme")
  return <Nav setTheme={setTheme} />
}

export const Default = Template.bind({})
Default.args = {}
