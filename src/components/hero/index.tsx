import React, { ReactElement } from "react"

import { FiChevronDown } from "react-icons/fi"

import * as Styled from "./styled"

interface Props {
  bgColor: string
}
const Hero = ({ bgColor }: Props): ReactElement => {
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
            {bgColor === "lightTheme" && (
              <div className="relative">
                <div className="absolute">
                  <Styled.SlideIn
                    src="/images/sun.png"
                    alt="sun"
                    layout={"raw"}
                    width={300}
                    height={300}
                  />
                </div>
                <Styled.SlideOut
                  src="/images/moon.png"
                  alt="moon"
                  layout={"raw"}
                  width={300}
                  height={300}
                />
              </div>
            )}
            {bgColor === "darkTheme" && (
              <div className="relative">
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
                />
              </div>
            )}
          </Styled.ImagesInnerContainer>
        </Styled.ImagesContainer>
      </Styled.InnerContainer>
    </Styled.Container>
  )
}

export default Hero
