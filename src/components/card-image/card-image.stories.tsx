import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import CardImage from "./index"

export default {
  title: "Components / CardImage",
  component: CardImage,
  args: {}
} as ComponentMeta<typeof CardImage>
const Template: ComponentStory<typeof CardImage> = () => <CardImage />

export const Default = Template.bind({})
Default.args = {}
