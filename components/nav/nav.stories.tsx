import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Nav from "./index"

export default {
  title: "Nav / Nav",
  component: Nav,
  argTypes: {}
} as ComponentMeta<typeof Nav>
const Template: ComponentStory<typeof Nav> = () => <Nav />

export const Default = Template.bind({})
Default.args = {}
