import React, { ReactElement } from "react"
import { useRouter } from "next/router"
import moment from "moment"

import * as Styled from "./styles"

interface Props {
  photo: string
  cardTitle: string
  cardText: string
  publishedAt: string
  slug: string
}

const CardImage = ({
  photo,
  cardTitle,
  cardText,
  publishedAt,
  slug
}: Props): ReactElement => {
  const router = useRouter()
  const timeStamp = moment(publishedAt).format("LT - MMM DD, YYYY")

  return (
    <Styled.Container>
      <Styled.Img src={photo} alt={cardTitle} />
      <Styled.InnerContainer>
        <Styled.OverLap>
          <Styled.CardTitle>{cardTitle}</Styled.CardTitle>
          <Styled.TimeStamp>{timeStamp}</Styled.TimeStamp>
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
