import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface Props {
  children: any
  value: any
}

const components = {
  block: {
    h4: ({ children }: Props): ReactElement => (
      <Styled.H4>{children}</Styled.H4>
    ),
    h1: ({ children }: Props): ReactElement => (
      <Styled.H1>{children}</Styled.H1>
    ),
    h2: ({ children }: Props): ReactElement => (
      <Styled.H2>{children}</Styled.H2>
    ),
    h3: ({ children }: Props): ReactElement => (
      <Styled.H3>{children}</Styled.H3>
    ),
    h5: ({ children }: Props): ReactElement => (
      <Styled.H5>{children}</Styled.H5>
    ),
    h6: ({ children }: Props): ReactElement => (
      <Styled.H6>{children}</Styled.H6>
    ),

    blockquote: ({ children }: Props): ReactElement => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
    introduction: ({ children }: Props): ReactElement => (
      <Styled.Introduction>{children}</Styled.Introduction>
    )
  },
  marks: {
    link: ({ children, value }: Props) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined
      return (
        <Styled.ExternalLink target="_blank" href={value.href} rel={rel}>
          {children}
        </Styled.ExternalLink>
      )
    }
  }
}

export default components
