import React, { ReactElement, useEffect, useState } from "react"

import CardImage from "../../components/card-image"

import * as Styled from "./styles"
interface Props {
  blogs: any
}
const Blogs = ({ blogs }: Props): ReactElement => {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.Header>Blogs</Styled.Header>
        <Styled.LineContainer>
          <Styled.Line />
        </Styled.LineContainer>
      </Styled.HeaderContainer>
      <Styled.OuterContainer>
        <Styled.InnerContainer>
          {blogs.map((blog: any, i: number) => (
            <CardImage
              key={i}
              photo={blog.mainImage}
              cardTitle={blog.title}
              cardText={blog.description}
              timestamp={blog.timestamp}
              slug={blog.slug.current}
            />
          ))}
        </Styled.InnerContainer>
      </Styled.OuterContainer>
    </Styled.Container>
  )
}

export default Blogs
