import Image from "next/image"
import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 25rem;
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
    flex-direction: row;
    min-width: 45rem;
    height: 19rem;
  }
  background: ${props => props.theme.colors.bgLightOffset};
`

export const ImgContainer = styled.div`
  display: block;
  width: 50%;
`
export const Img = styled(Image)`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  object-fit: cover;

  @media ${props => props.theme.devices.tablet} {
    border-radius: unset;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OverLap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem;
  width: 100%;

  @media ${props => props.theme.devices.tablet} {
    position: absolute;
    left: 20rem;
    background: ${props => props.theme.colors.bgLightOffset};
    padding: 1.5rem 1rem;
    width: 50%;
  }
`

export const TimeStamp = styled.small`
  color: black;
  padding: 0.5rem 0;
`
export const CardTitle = styled.h5`
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

export const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 50%;
  color: white;
  font-weight: bold;
  background: ${props => props.theme.colors.skin};
  margin: 0.5rem 0;
  border-radius: ${props => props.theme.borderRadius.md};
`
