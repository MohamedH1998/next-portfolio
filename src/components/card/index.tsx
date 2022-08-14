import React, { ReactElement } from "react"
import { liveDemoButtonText, sourceCodeButtonText } from "./constants"
import * as Styled from "./styles"

interface Props {
  photo: string
  cardTitle: string
  cardText: string
  liveDemo: string
  sourceCode: string
}

const Project = ({
  photo,
  cardTitle,
  cardText,
  liveDemo,
  sourceCode
}: Props): ReactElement => {
  return (
    <Styled.Container>
      <a href={liveDemo}>
        <Styled.Image src={photo} alt={cardTitle} />
      </a>
      <Styled.InnerContainer>
        <a href={sourceCode}>
          <Styled.CardTitle>{cardTitle}</Styled.CardTitle>
        </a>
        <Styled.CardText>{cardText}</Styled.CardText>
        <Styled.LinksContainer>
          <Styled.Link href={liveDemo}>{liveDemoButtonText}</Styled.Link>
          <Styled.Link href={sourceCode}>{sourceCodeButtonText}</Styled.Link>
        </Styled.LinksContainer>
      </Styled.InnerContainer>
    </Styled.Container>
  )
}

export default Project
