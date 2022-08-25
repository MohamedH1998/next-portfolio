import React, { CSSProperties } from "react"
import * as Styled from "./styles"
import HashLoader from "react-spinners/HashLoader"
const Loading = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red"
  }

  return (
    <Styled.Container>
      <HashLoader loading={true} cssOverride={override} size={150} />
    </Styled.Container>
  )
}

export default Loading
