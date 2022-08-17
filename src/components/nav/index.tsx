import React, { useState, useEffect, ReactElement } from "react"
import { VscCircleLargeFilled } from "react-icons/vsc"
import { TbInfinity } from "react-icons/tb"
import { BsHouse } from "react-icons/bs"

import * as Styled from "./styled"
import {
  blogsSectionTitle,
  homeSectionTitle,
  portfolioSectionTitle
} from "./constants"
import { useRouter } from "next/router"

interface Props {
  hasToggle?: boolean
  setTheme: (value: string) => void
}

const Nav = ({ setTheme, hasToggle = true }: Props): ReactElement => {
  const [navOpen, setNavOpen] = useState(false)
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)

  const router = useRouter()
  const handleClick = () => {
    setNavOpen(prev => !prev)
  }

  useEffect(() => {
    darkModeEnabled ? setTheme("darkTheme") : setTheme("lightTheme")
  }, [darkModeEnabled, setTheme])

  const navOptions = [
    { dest: "home", sectionTitle: homeSectionTitle },
    { dest: "portfolio", sectionTitle: portfolioSectionTitle },
    { dest: "posts", sectionTitle: blogsSectionTitle }
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
          aria-label="switch theme"
        >
          <Styled.ThemeIndicator enabled={darkModeEnabled} />
        </Styled.ThemeSwitch>

        {hasToggle ? (
          <Styled.InfinityIcon>
            <TbInfinity />
          </Styled.InfinityIcon>
        ) : (
          <Styled.HomeIcon onClick={() => router.push("/")}>
            <BsHouse />
          </Styled.HomeIcon>
        )}
      </Styled.InnerContainer>
    </Styled.Container>
  )
}

export default Nav
