import styled from "styled-components"

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;

  @media ${props => props.theme.devices.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  z-index: 1;
  padding: 3rem 0;
`

export const HeaderContainer = styled.div`
  width: 100%;
  @media ${props => props.theme.devices.laptop} {
    width: 70%;
  }
`
export const Header = styled.h1`
  background: ${props => props.theme.bg};
  font-size: 2rem;
  line-height: 1;
  padding: 0 2.5rem;
`
export const Line = styled.hr`
  --tw-border-opacity: 1;
  border-color: rgb(187 117 88 / var(--tw-border-opacity));
  border-width: 3px;
  width: 100%;
  border-top-width: 1px;
  height: 0;
  margin: 1rem 0;
`
export const LineContainer = styled.div`
  background: ${props => props.theme.bg};
  margin: 0 2rem;
`
