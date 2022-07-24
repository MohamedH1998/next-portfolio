import React, { ReactElement } from "react"

import * as Styled from "./styled"

interface Props {
  dest: string
  destName: string
  handleClick: () => void
}

const NavLink = ({ dest, destName, handleClick }: Props): ReactElement => {
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
        {destName}
      </Styled.Link>
    </Styled.LinkContainer>
  )
}

export default NavLink
