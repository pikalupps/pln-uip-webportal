import Navbar from "@/components/Navbar"
import Card from "@/components/Card"
import { Unit } from '@/constant'
import Image from "next/image"

export default function Page() {
  return(
    <>
      <head>
        <title>Dashboard</title>
      </head>
      <body>
        <div className="bg">
          <div className="fixed">
            <Navbar />
          </div>
          <div className="p-20 text-center">
            <h1 className="title pt-32 pb-5">Selamat Datang di Web Portal</h1>
            <h1 className="title pb-20">PT PLN (Persero) UIP Nusa Tenggara</h1>
          </div>
        </div>
        <div className="text-center">
          <h1 className="section-title">Unit Kami</h1>
          {<div className='flex gap-10 justify-center px-20'>
              {Unit.map((unit) => (
                <Card alt={unit.alt} src={unit.src} address={unit.address} city={unit.city}/>
              ))}
          </div>}
        </div>
        <div className="text-center">
          <h1 className="section-title">Map</h1>
        </div>
      </body>
    </>
  )
}