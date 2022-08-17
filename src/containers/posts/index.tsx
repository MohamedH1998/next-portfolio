import React, { ReactElement, ReactNode } from "react"

import * as Styled from "./styles"
import moment from "moment"
import { PortableText } from "@portabletext/react"
import components from "../../components/sanity-components"

interface Props {
  avatar: string
  body: any
  description: string
  title: string
  mainImage: string
  topic: string
  author: string
  date: string
}

const Post = ({
  body,
  description,
  title,
  mainImage,
  topic,
  avatar,
  author,
  date
}: Props): ReactElement => {
  const timeStamp = moment(date).format("DD MMM YYYY")

  interface Props {
    children: ReactNode
  }

  return (
    <Styled.Container>
      <Styled.Small>{topic}</Styled.Small>
      <Styled.Header>{title}</Styled.Header>
      <Styled.Summary>{description}</Styled.Summary>
      <Styled.AuthorContainer>
        <Styled.Avatar name={author} src={avatar} />
        <Styled.AuthorInfo>
          <small>{author}</small>
          <Styled.Timestamp>{timeStamp}</Styled.Timestamp>
        </Styled.AuthorInfo>
      </Styled.AuthorContainer>
      <Styled.Image src={mainImage} alt={title} />
      <Styled.Body>
        <PortableText value={body} components={components} />
      </Styled.Body>
    </Styled.Container>
  )
}

export default Post
