import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-08-10"
})
