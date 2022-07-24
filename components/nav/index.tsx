import React, { useState, useEffect, ReactElement } from "react"
import { VscCircleLargeFilled } from "react-icons/vsc"
import { SiDwavesystems } from "react-icons/si"

import * as Styled from "./styled"
import NavLink from "./nav-items"

interface Props {
  setTheme: (value: string) => void
}

const Nav = ({ setTheme }: Props): ReactElement => {
  const [navOpen, setNavOpen] = useState(false)
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)

  const handleClick = () => {
    setNavOpen(prev => !prev)
  }

  useEffect(() => {
    navOpen
      ? (document.body.style.overflowX = "hidden")
      : (document.body.style.overflowX = "unset")
  }, [navOpen])

  useEffect(() => {
    darkModeEnabled ? setTheme("darkTheme") : setTheme("lightTheme")
  }, [darkModeEnabled, setTheme])

  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.Icon>
          <VscCircleLargeFilled />
        </Styled.Icon>

        <Styled.ThemeSwitch
          checked={darkModeEnabled}
          onChange={setDarkModeEnabled}
        >
          <Styled.ThemeIndicator enabled={darkModeEnabled} />
        </Styled.ThemeSwitch>

        <Styled.NavToggle active={navOpen} onClick={handleClick}>
          <SiDwavesystems />
        </Styled.NavToggle>
      </Styled.InnerContainer>

      <Styled.NavItems active={navOpen}>
        <NavLink handleClick={handleClick} dest="name" destName="Home" />
        <NavLink handleClick={handleClick} dest="about" destName="About" />
        <NavLink
          handleClick={handleClick}
          dest="portfolio"
          destName="Portfolio"
        />
        <NavLink handleClick={handleClick} dest="blogs" destName="Blogs" />
      </Styled.NavItems>
    </Styled.Container>
  )
}

export default Nav
