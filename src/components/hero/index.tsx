import React, { ReactElement, useContext } from "react"
import { ThemeContext } from "styled-components"

import { MdOutlineTouchApp } from "react-icons/md"

import * as Styled from "./styled"
import { heading, name, rotatedHeading, subheading } from "./constants"

const Hero = (): ReactElement => {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.Heading>{heading}</Styled.Heading>
        <Styled.Name>{name}</Styled.Name>
        <Styled.ButtonContainer>
          <Styled.Button
            target="_blank"
            href="https://twitter.com/messages/compose?recipient_id=1120732375695097857&text=Hey,%20I%20came%20across%20your%20website%20and%20wanted%20to%20say%20hi!👋"
            data-screen-name="@momito8_"
          >
            <MdOutlineTouchApp />
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
                  width={300}
                  height={300}
                  priority
                />

                <Styled.SlideOut
                  src="/images/moon.png"
                  alt="moon"
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
                  width={300}
                  height={300}
                  priority
                />
                <Styled.SlideOut
                  src="/images/sun.png"
                  alt="sun"
                  width={300}
                  height={300}
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
