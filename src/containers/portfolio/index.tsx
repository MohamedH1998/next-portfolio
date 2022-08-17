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
      const loadedPosts = projects.map((project: any) => {
        return {
          cardText: project.description,
          liveDemo: project.liveDemo,
          sourceCode: project.sourceCode,
          title: project.title,
          img: project.mainImage
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
              cardTitle={project.title}
              sourceCode={project.sourceCode}
              liveDemo={project.liveDemo}
              cardText={project.cardText}
              img={project.img}
            />
          ))}
      </Styled.InnerContainer>
    </Styled.Container>
  )
}

export default Portfolio
