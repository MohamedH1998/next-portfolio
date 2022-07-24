import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Hero from "./index"

export default {
  title: "Components / Hero",
  component: Hero,
  args: {
    bgColor: "lightTheme"
  }
} as ComponentMeta<typeof Hero>
const Template: ComponentStory<typeof Hero> = args => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {}
