import React, { useState, useEffect } from "react"
import { VscCircleLargeFilled } from "react-icons/vsc"
import { SiDwavesystems } from "react-icons/si"

import * as Styled from "./styled"

const Nav = () => {
  const [click, setClick] = useState(false)
  const [bgColor, setBgColor] = useState("dawn")
  const [enabled, setEnabled] = useState(false)

  const handleClick = () => {
    setClick(prev => !prev)
    console.log("click", click)
  }

  useEffect(() => {
    click
      ? (document.body.style.overflowX = "hidden")
      : (document.body.style.overflowX = "unset")
  }, [click])

  const handleThemeChange = () => {
    if (bgColor === "dawn") {
      setBgColor("dusk")
      !document.documentElement.classList.contains("dark") &&
        document.documentElement.classList.add("dark")
    } else {
      setBgColor("dawn")
      document.documentElement.classList.contains("dark") &&
        document.documentElement.classList.remove("dark")
    }
  }

  return (
    <Styled.Container background={bgColor}>
      <Styled.InnerContainer>
        <Styled.Icon>
          <VscCircleLargeFilled />
        </Styled.Icon>

        <Styled.ThemeSwitch checked={enabled} onChange={setEnabled}>
          <span className="sr-only">Enable notifications</span>

          <Styled.ThemeIndicator
            enabled={enabled}
            className={`${
              enabled
                ? "translate-x-12 bg-white"
                : "translate-x-1 bg-yellow-200"
            }`}
          />
        </Styled.ThemeSwitch>

        <Styled.NavToggle active={click} onClick={handleClick}>
          <SiDwavesystems />
        </Styled.NavToggle>
      </Styled.InnerContainer>

      <Styled.NavItems active={click}>
        <h1>vibe</h1>
      </Styled.NavItems>
    </Styled.Container>
  )
}

export default Nav
