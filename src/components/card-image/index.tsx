import React, { ReactElement } from "react"
import { useRouter } from "next/router"
import moment from "moment"

import * as Styled from "./styles"

interface Props {
  photo: string
  cardTitle: string
  cardText: string
  timestamp: string
  slug: string
}

const CardImage = ({
  photo,
  cardTitle,
  cardText,
  timestamp,
  slug
}: Props): ReactElement => {
  const router = useRouter()
  return (
    <Styled.Container>
      <Styled.Img src={photo} alt={cardTitle} />
      <Styled.InnerContainer>
        <Styled.OverLap>
          <Styled.CardTitle>{cardTitle}</Styled.CardTitle>
          <Styled.TimeStamp>{timestamp}</Styled.TimeStamp>
          <Styled.CardText>{cardText}</Styled.CardText>
          <Styled.Button onClick={() => router.push(`/blogs/${slug}`)}>
            Read more
          </Styled.Button>
        </Styled.OverLap>
      </Styled.InnerContainer>
    </Styled.Container>
  )
}

export default CardImage
