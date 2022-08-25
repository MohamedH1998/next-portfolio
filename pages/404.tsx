import Router, { useRouter } from "next/router"
import React, { useEffect } from "react"
import Loading from "../src/components/loading"

const CustomErrorPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Loading />
}

export default CustomErrorPage
