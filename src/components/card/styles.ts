import Image from "next/image"
import styled from "styled-components"

export const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 28rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  align-self: stretch;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.devices.tablet} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  background: ${props => props.theme.colors.bgLightOffset};
`

export const Img = styled(Image)`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`

export const InnerContainer = styled.div`
  padding: 1.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const CardTitle = styled.h2`
  margin-bottom: 0.5rem;
  color: #111827;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`
export const CardText = styled.p`
  margin-bottom: 0.75rem;
  color: #374151;
  font-weight: 400;
`
export const LinksContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: space-between;
  align-self: stretch;
`

export const Link = styled.a`
  display: inline-flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: bold;
  text-align: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${props => props.theme.colors.bgOffset};
  @media ${props => props.theme.devices.tablet} {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`
