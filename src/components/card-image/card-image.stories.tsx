import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import CardImage from "./index"

export default {
  title: "Components / CardImage",
  component: CardImage,
  args: {}
} as ComponentMeta<typeof CardImage>
const Template: ComponentStory<typeof CardImage> = () => (
  <CardImage
    photo="https://images.unsplash.com/photo-1637998450975-15193338ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
    cardTitle="Title"
    cardText="Text"
    timestamp="2022-07-31 18:14"
    slug="this-is-a-test"
  />
)

export const Default = Template.bind({})
Default.args = {}
