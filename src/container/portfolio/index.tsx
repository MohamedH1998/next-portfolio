import React from "react"
import Project from "../../components/project"
import * as Styled from "./styles"

const Portfolio = () => {
  const projectsInfo = [
    {
      title: "The Camper App",
      sourceCode: "https://github.com/MohamedH1998/CamperApp",
      liveDemo: "https://the-camperapp.herokuapp.com/",
      cardText:
        "The Camper vibe App is a full-stack application that enables users to view various campground locations from around the world and allows them to create their own.",
      photo: "/images/camp-app.png"
    },
    {
      title: "Elixir",
      sourceCode: "https://github.com/MohamedH1998/elixir",
      liveDemo: "https://elixir-commerce.netlify.app/",
      cardText:
        "Elixir commerce is a react application made using React JS, Redux, OAuth (authentication).",
      photo: "/images/camp-app.png"
    },
    {
      title: "Task Tracker",
      sourceCode: "https://github.com/MohamedH1998/react-task-manager",
      liveDemo: "https://tasktrckr.netlify.app//",
      cardText:
        "This a React task tracker app that allows users to create/delete tasks and toggle whether they want reminders for the tasks or not.",
      photo: "/images/camp-app.png"
    }
  ]
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        {projectsInfo.map((project, i) => (
          <Project
            key={i}
            photo={project.photo}
            cardTitle={project.title}
            sourceCode={project.sourceCode}
            liveDemo={project.liveDemo}
            cardText={project.cardText}
          />
        ))}
      </Styled.InnerContainer>
    </Styled.Container>
  )
}

export default Portfolio
