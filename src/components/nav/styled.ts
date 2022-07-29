import styled, { keyframes, css } from "styled-components"
import { Switch } from "@headlessui/react"
import { ReactNode } from "react"
import { Link as ReactLink } from "react-scroll"

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 50;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  background: ${props => props.theme.bg};
`

export const InnerContainer = styled.div`
  display: flex;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const Icon = styled.i`
  display: flex;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: none;
  justify-self: start;
  color: ${props => props.theme.colors.skin};
  @media ${props => props.theme.devices.tablet} {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`
interface ThemeProps {
  onChange: (value: boolean) => void
  checked: boolean
  children: ReactNode
}
export const ThemeSwitch = styled(Switch)<ThemeProps>`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: 3rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: ${props => (props.checked ? "#2f2f6e" : "#93C5FD")};
  border: 1px solid white;
  @media ${props => props.theme.devices.tablet} {
    width: 5rem;
    height: 2.5rem;
  }
`
interface ThemeIndicatorProps {
  enabled: boolean
}
export const ThemeIndicator = styled.span<ThemeIndicatorProps>`
  display: inline-block;
  border-radius: 9999px;
  height: 1rem;
  width: 1rem;
  background-color: ${props => (props.enabled ? "#ffffff" : "#FDE68A")};
  transform: translateX(${props => (props.enabled ? "1.5rem" : "0.25rem")});
  @media ${props => props.theme.devices.tablet} {
    height: 1.75rem;
    width: 1.75rem;
    transform: translateX(${props => (props.enabled ? "2.75rem" : "0.25rem")});
  }
`

interface NavToggleProps {
  active: boolean
}
export const NavToggle = styled.span<NavToggleProps>`
  display: flex;
  right: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 900;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.text};
  ${props =>
    props.active
      ? `
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: 300ms linear all;
    `
      : " transition: 300ms linear all;"}

  @media ${props => props.theme.devices.tablet} {
    font-size: 3rem;
    line-height: 1;
  }
`

export const NavItems = styled.ul<NavToggleProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  top: 4.5rem;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  z-index: 9999;
  ${props =>
    props.active
      ? css`
          animation: ${slideIn} 0.5s forwards;
          -webkit-animation: ${slideIn} 0.5s forwards;
        `
      : css`
          animation: ${slideOut} 0.5s forwards;
          -webkit-animation: ${slideOut} 0.5s forwards;
        `}
`

const slideIn = keyframes`
  100% {
    transform: translateX(0%);
  }
`

const slideOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`

export const Link = styled(ReactLink)`
  display: flex;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  align-items: center;
  height: 100%;
  cursor: pointer;

  @media ${props => props.theme.devices.tablet} {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`

export const LinkContainer = styled.li`
  margin: 2.5rem;
  vertical-align: middle;
`
