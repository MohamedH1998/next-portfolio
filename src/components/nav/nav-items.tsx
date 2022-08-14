import React, { ReactElement } from "react"

import * as Styled from "./styled"

interface Props {
  dest: string
  sectionTitle: string
  handleClick: () => void
}

const NavLink = ({ dest, sectionTitle, handleClick }: Props): ReactElement => {
  return (
    <Styled.LinkContainer>
      <Styled.Link
        activeClass="active"
        to={dest}
        spy={true}
        smooth={true}
        onClick={handleClick}
        offset={-55}
      >
        {sectionTitle}
      </Styled.Link>
    </Styled.LinkContainer>
  )
}

export default NavLink
