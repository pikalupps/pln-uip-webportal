import { options } from "./api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
    {
      session? (
        <div></div>
      ) : (
        <div></div>
      )
    }
    </>
  )
}