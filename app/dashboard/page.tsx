import Card from "@/components/UnitCard"
import { Unit } from '@/constant'
import VideoPlayer from "@/components/VideoPlayer"

export default function Page() {
  return (
    <>
      <div>
        <h1 className="title pl-32 pt-24 pb-5">Selamat Datang di Web Portal PT PLN (Persero) UIP Nusra</h1>
        <div className="px-32 flex">
          <div className=" w-4/5">
            <p>PLN selalu berupaya memenuhi kebutuhan listrik masyarakat Indonesia yang terus berkembang, meningkatkan keandalan pasokan dan layanan
              termasuk mengembangkan listrik dari energi baru
              dan terbarukan dengan tetap mengupayakan
              pengembangan kapasitas infrastruktur kelistrikan
              yang optimal dan efisien.</p>

            <h3 className=" mt-4 underline">
              Berita Terkini
            </h3>
          </div>
          <VideoPlayer source="/vid.mp4" />
        </div>

      </div>
      <div className="text-center">
        <h1 className="section-title">Unit Kami</h1>
        {<div className='lg:flex flex-1 gap-10 justify-center px-20'>
          {Unit.map((unit) => (
            <Card alt={unit.alt} src={unit.src} address={unit.address} city={unit.city} telp={unit.telp} map={unit.map} />
          ))}
        </div>}
      </div>
    </>
  )
}