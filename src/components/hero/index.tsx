import React, { ReactElement, useContext } from "react"
import { ThemeContext } from "styled-components"

import { FiChevronDown } from "react-icons/fi"

import * as Styled from "./styled"
import { heading, name, rotatedHeading, subheading } from "./constants"

const Hero = (): ReactElement => {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext
  return (
    <Styled.Container>
      <Styled.InnerContainer className="home">
        <Styled.Heading>{heading}</Styled.Heading>
        <Styled.Name>{name}</Styled.Name>
        <Styled.ButtonContainer>
          <Styled.Button to="about" spy={true} smooth={true}>
            <FiChevronDown />
          </Styled.Button>

          <Styled.SubHeading>{subheading}</Styled.SubHeading>
        </Styled.ButtonContainer>
        <Styled.ImagesContainer>
          <Styled.RotatedHeading>{rotatedHeading}</Styled.RotatedHeading>

          <Styled.ImagesInnerContainer>
            {theme === "lightTheme" && (
              <Styled.Images>
                <Styled.SlideIn
                  src="/images/sun.png"
                  alt="sun"
                  layout={"raw"}
                  width={300}
                  height={300}
                  priority
                />

                <Styled.SlideOut
                  src="/images/moon.png"
                  alt="moon"
                  layout={"raw"}
                  width={300}
                  height={300}
                  priority
                />
              </Styled.Images>
            )}
            {theme === "darkTheme" && (
              <Styled.Images>
                <Styled.SlideIn
                  src="/images/moon.png"
                  alt="moon"
                  layout={"raw"}
                  width={300}
                  height={300}
                  priority
                />
                <Styled.SlideOut
                  src="/images/sun.png"
                  alt="sun"
                  width={300}
                  height={300}
                  layout={"raw"}
                  priority
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
