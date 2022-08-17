import { Link } from "react-scroll"
import styled, { keyframes, css } from "styled-components"
import Image from "next/future/image"

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  z-index: 1;
`

export const InnerContainer = styled.div`
  display: flex;
  position: relative;
  top: 100%;
  padding-right: 0.25rem;
  padding-bottom: 2.5rem;
  padding-left: 2.5rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;

  @media ${props => props.theme.devices.tablet} {
    width: 75%;
  }
`

export const Heading = styled.p`
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 50%;

  @media ${props => props.theme.devices.tablet} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

export const Name = styled.h1`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const Button = styled(Link)`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 9999px;
  border: 2px solid ${props => props.theme.text};
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`

export const SubHeading = styled(Heading)`
  @media ${props => props.theme.devices.tablet} {
    text-align: center;
  }
`

export const ImagesContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 22rem;
`

export const RotatedHeading = styled.div`
  left: 0;
  width: 260px;
  z-index: 999;
  rotate: -90deg;
  text-align: right;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform-origin: top left;

  @media ${props => props.theme.devices.tablet} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  @media ${props => props.theme.devices.laptop} {
    padding-right: 4rem;
  }
`

export const ImagesInnerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 20rem;
`

const slideIn = keyframes`
  0% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-200%) translateX(-200%);
    transform: translateY(-200%) translateX(-200%);
    opacity: 0;
  }
`

export const SlideIn = styled(Image)`
  object-fit: cover;
  top: 0;
  left: 3rem;
  width: 83.333333%;
  position: absolute;

  @media ${props => props.theme.devices.tablet} {
    left: 0;
    width: 100%;
  }

  ${css`
    animation: ${slideIn} 9s cubic-bezier(0.55, 0.085, 0.68, 0.53) reverse both;
  `}
`
export const Images = styled.div`
  position: relative;
  z-index: -0;
`

const slideOut = keyframes`
  0% {
    -webkit-transform: translateY(100%) translateX(100%);
    transform: translateY(100%) translateX(100%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
`

export const SlideOut = styled(SlideIn)`
  ${css`
    animation: ${slideOut} 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both;
  `}
`
