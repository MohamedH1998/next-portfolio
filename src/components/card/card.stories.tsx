import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Card from "./index"

export default {
  title: "Components / Card",
  component: Card,
  args: {
    cardTitle: "The Camper App",
    sourceCode: "https://github.com/MohamedH1998/CamperApp",
    liveDemo: "https://the-camperapp.herokuapp.com/",
    cardText:
      "The Camper App is a full-stack application that enables users to view various campground locations from around the world and allows them to create their own.",
    img: "https://images.unsplash.com/photo-1657299170936-0531a116c87c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  }
} as ComponentMeta<typeof Card>
const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  cardTitle: "The Camper App",
  sourceCode: "https://github.com/MohamedH1998/CamperApp",
  liveDemo: "https://the-camperapp.herokuapp.com/",
  cardText:
    "The Camper App is a full-stack application that enables users to view various campground locations from around the world and allows them to create their own.",
  img: "https://images.unsplash.com/photo-1657299170936-0531a116c87c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
}
