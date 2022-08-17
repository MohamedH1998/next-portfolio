import React, { ReactElement, useEffect, useState } from "react"
import Card from "../../components/card"
import imageUrlBuilder from "@sanity/image-url"

import * as Styled from "./styles"

interface Props {
  projects: any
}

const Portfolio = ({ projects }: Props): ReactElement => {
  const [formattedProjects, setFormattedProjects] = useState<any[]>([])
  useEffect(() => {
    if (projects.length) {
      const imgURLBuilder = imageUrlBuilder({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
        dataset: "production"
      })
      const loadedPosts = projects.map((project: any) => {
        return {
          cardText: project.description,
          liveDemo: project.liveDemo,
          sourceCode: project.sourceCode,
          title: project.title,
          photo: imgURLBuilder.image(project.mainImage).width(500).height(250)
        }
      })
      setFormattedProjects(loadedPosts)
    }
  }, [projects])

  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.Header>Projects</Styled.Header>
        <Styled.LineContainer>
          <Styled.Line />
        </Styled.LineContainer>
      </Styled.HeaderContainer>
      <Styled.InnerContainer>
        {formattedProjects &&
          formattedProjects.map((project, i) => (
            <Card
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
