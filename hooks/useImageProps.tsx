import { useNextSanityImage } from "next-sanity-image"
import sanityClient from "@sanity/client"

const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true
})

export const useImageProps = (image: any) => {
  return useNextSanityImage(configuredSanityClient, image)
}
