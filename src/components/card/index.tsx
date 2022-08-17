import Image from "next/image"
import React, { ReactElement } from "react"
import { useImageProps } from "../../../hooks/useImageProps"
import { liveDemoButtonText, sourceCodeButtonText } from "./constants"
import * as Styled from "./styles"

interface Props {
  cardTitle: string
  cardText: string
  liveDemo: string
  sourceCode: string
  img: any
}

const Project = ({
  cardTitle,
  cardText,
  liveDemo,
  sourceCode,
  img
}: Props): ReactElement => {
  const formattedImg: any = useImageProps(img)

  return (
    <Styled.Container>
      <a href={liveDemo}>
        <Image
          {...formattedImg}
          layout="responsive"
          sizes="(max-width: 800px) 100vw, 800px"
          alt={cardTitle}
        />
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
