import styled from "styled-components"
import { Avatar as ChakraAvatar } from "@chakra-ui/react"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem;
`
export const Small = styled.small`
  font-weight: bold;
`

export const Header = styled.h1`
  font-size: 1.8rem;
  font-family: ${props => props.theme.fontFamily.secondary};
  padding: 0.5rem 0;
`

export const Summary = styled.small`
  text-align: center;
  padding: 0 0.8rem;
`

export const Timestamp = styled.time`
  font-size: smaller;
`
export const AuthorContainer = styled.div`
  padding-top: 1rem;
  display: flex;
`
export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled(ChakraAvatar)`
  margin-right: 10px;
  align-self: center;
`
export const Image = styled.img`
  padding: 2rem 1rem;
`
export const Body = styled.div`
  padding: 1rem 1rem;
`
