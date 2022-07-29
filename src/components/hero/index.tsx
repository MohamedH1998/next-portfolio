import React, { ReactElement, useContext } from "react"
import { ThemeContext } from "styled-components"

import { FiChevronDown } from "react-icons/fi"

import * as Styled from "./styled"

const Hero = (): ReactElement => {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext
  return (
    <Styled.Container>
      <Styled.InnerContainer className="home">
        <Styled.Heading>
          building smart, simple &#38; scalable solutions
        </Styled.Heading>
        <Styled.Name>Mohamed Hassan</Styled.Name>
        <Styled.ButtonContainer>
          <Styled.Button to="about" spy={true} smooth={true}>
            <FiChevronDown />
          </Styled.Button>

          <Styled.SubHeading>
            clarity comes from engagement, not thought.
          </Styled.SubHeading>
        </Styled.ButtonContainer>
        <Styled.ImagesContainer>
          <Styled.RotatedHeading>self-taught dev</Styled.RotatedHeading>

          <Styled.ImagesInnerContainer>
            {theme === "lightTheme" && (
              <Styled.Images>
                <Styled.SlideIn
                  src="/images/sun.png"
                  alt="sun"
                  layout={"raw"}
                  width={300}
                  height={300}
                />

                <Styled.SlideOut
                  src="/images/moon.png"
                  alt="moon"
                  layout={"raw"}
                  width={300}
                  height={300}
                />
              </Styled.Images>
            )}
            {theme === "darkTheme" && (
              <Styled.Images>
                <Styled.SlideIn
                  src="/images/moon.png"
                  className="slide-out-tl"
                  alt="moon"
                  layout={"raw"}
                  width={300}
                  height={300}
                />
                <Styled.SlideOut
                  src="/images/sun.png"
                  alt="sun"
                  width={300}
                  height={300}
                  layout={"raw"}
                />
              </Styled.Images>
            )}
          </Styled.ImagesInnerContainer>
        </Styled.ImagesContainer>
      </Styled.InnerContainer>
    </Styled.Container>
  )
}

export default Hero
