import Navbar from "@/components/Navbar"
import Card from "@/components/Card"
import { Unit } from '@/constant'

export default function Page() {
  return(
    <>
      <head>
        <title>Dashboard</title>
      </head>
      <body>
        <div className="bg h-screen w-screen">
          <div className="fixed">
            <Navbar />
          </div>
          <div className="p-60">
            <h1 className="text-4xl">Tittle</h1>
            <h1> </h1>
          </div>
        </div>
          <div>
            {<div className='flex gap-20 justify-center p-20'>
                {Unit.map((unit) => (
                  <Card alt={unit.alt} src={unit.src} />
                ))}
            </div>}
          </div>
      </body>
    </>
  )
}