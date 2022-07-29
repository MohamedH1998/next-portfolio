import styled from "styled-components"

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;

  @media ${props => props.theme.devices.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 75%;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  background: ${props => props.theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`
