import styled from "styled-components"
import { Avatar as ChakraAvatar } from "@chakra-ui/react"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.text};
`
export const Small = styled.small`
  font-weight: bold;
`

export const Header = styled.h1`
  font-size: 2rem;
  font-family: ${props => props.theme.fontFamily.secondary};
  padding: 0.5rem 0;
`

export const Summary = styled.p`
  text-align: center;
  padding: 0 0.8rem;
`

export const Timestamp = styled.time`
  font-size: smaller;
  font-weight: normal;
`
export const AuthorContainer = styled.div`
  padding-top: 1rem;
  display: flex;
`
export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
`

export const Avatar = styled(ChakraAvatar)`
  margin-right: 10px;
  align-self: center;
`
export const Image = styled.img`
  padding: 2rem 1rem;

  @media ${props => props.theme.devices.laptop} {
    max-width: 100%;
    width: 1200px;
  }
`
export const Body = styled.div`
  padding: 1rem 1rem;
  @media ${props => props.theme.devices.tablet} {
    padding: 1rem 4rem;
  }
  @media ${props => props.theme.devices.laptop} {
    padding: 1rem 5rem;
  }
  @media ${props => props.theme.devices.lgLaptop} {
    padding: 1rem 12rem;
  }
  @media ${props => props.theme.devices.desktop} {
    padding: 1rem 15rem;
  }
`
