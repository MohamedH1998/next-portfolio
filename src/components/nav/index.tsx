import React, { useState, useEffect, ReactElement } from "react"
import { VscCircleLargeFilled } from "react-icons/vsc"
import { SiDwavesystems } from "react-icons/si"
import { BsHouse } from "react-icons/bs"

import * as Styled from "./styled"
import NavLink from "./nav-items"
import {
  aboutSectionTitle,
  blogsSectionTitle,
  homeSectionTitle,
  portfolioSectionTitle
} from "./constants"

interface Props {
  hasToggle?: boolean
  setTheme: (value: string) => void
}

const Nav = ({ setTheme, hasToggle = true }: Props): ReactElement => {
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

  const navOptions = [
    { dest: "home", sectionTitle: homeSectionTitle },
    { dest: "about", sectionTitle: aboutSectionTitle },
    { dest: "portfolio", sectionTitle: portfolioSectionTitle },
    { dest: "blogs", sectionTitle: blogsSectionTitle }
  ]

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

        {hasToggle ? (
          <Styled.NavToggle active={navOpen} onClick={handleClick}>
            <SiDwavesystems />
          </Styled.NavToggle>
        ) : (
          <Styled.HomeIcon>
            <BsHouse />
          </Styled.HomeIcon>
        )}
      </Styled.InnerContainer>

      <Styled.NavItems active={navOpen}>
        {navOptions.map((navOption, i) => (
          <NavLink
            handleClick={handleClick}
            key={i}
            dest={navOption.dest}
            sectionTitle={navOption.sectionTitle}
          />
        ))}
      </Styled.NavItems>
    </Styled.Container>
  )
}

export default Nav
