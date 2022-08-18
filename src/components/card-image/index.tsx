import React, { ReactElement } from "react"
import { useRouter } from "next/router"

import * as Styled from "./styles"
import { useImageProps } from "../../../hooks/useImageProps"

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
  const formattedImg: any = useImageProps(photo)
  return (
    <Styled.Container>
      <Styled.ImgContainer>
        <Styled.Img
          {...formattedImg}
          width="355px"
          height="300px"
          layout="responsive"
          alt={cardTitle}
        />
      </Styled.ImgContainer>
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
