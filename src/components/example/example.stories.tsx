import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Example from "./index"

export default {
  title: "Example / Example",
  component: Example,
  argTypes: {}
} as ComponentMeta<typeof Example>
const Template: ComponentStory<typeof Example> = () => <Example />

export const Default = Template.bind({})
Default.args = {}
