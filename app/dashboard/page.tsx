import Card from "@/components/UnitCard"
import { Unit } from '@/constant'

export default function Page() {
  return(
    <>
      <div className="bg">
          <div className="p-20 text-center">
            <h1 className="title pt-32 pb-5">Selamat Datang di Web Portal</h1>
            <h1 className="title pb-20">PT PLN (Persero) UIP Nusa Tenggara</h1>
          </div>
        </div>
        <div className="text-center">
          <h1 className="section-title">Unit Kami</h1>
          {<div className='lg:flex flex-1 gap-10 justify-center px-20'>
              {Unit.map((unit) => (
                <Card alt={unit.alt} src={unit.src} address={unit.address} city={unit.city} telp={unit.telp} map={unit.map}/>
              ))}
          </div>}
        </div>
        <div className="text-center">
          <h1 className="section-title">Map</h1>
        </div>
    </>
  )
}