import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='card drop-shadow-md bg-white text-center'>
        <h1 className='section-title !p-0 !pb-8'>Kontak Kami</h1>
          <div className='flex justify-center pb-8'>
            <div className='mr-8 flex flex-col gap-3'>
              <div className='flex text-left'>
                <div className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className="iconContact">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className='text-cyan-800 font-semibold'>Alamat</p>
                  <p>Jalan Yos Sudarso No. 2A</p>
                  <p>Mataram, NTB</p>
                  <p>83114</p>
                </div>
              </div>
              <div className='flex text-left'>
                <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  className="iconContact">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                </div>
                <div>
                  <p className='text-cyan-800 font-semibold'>Telepon</p>
                  <p>(0370) 621732</p>
                  <p>(0370) 621733</p>
                </div>
              </div>
              <div className='flex text-left'>
                <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  className="iconContact">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                </div>
                <div>
                  <p className='text-cyan-800 font-semibold'>Fax</p>
                  <p>(0370) 621734</p>
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <Image 
                alt="PLN UIP NTB"
                src="/uipntb.jpg"
                quality="100"
                width={400}
                height={300}>
              </Image>
            </div>
          </div>
          {/* <div className='flex-1 justify-center border items-center mt-5'>
            <p className='textTittle2'>Kantor Induk PT PLN (Persero) UIP Nusa Tenggara</p>
            <div className='flex'>
              <div className='border'>
                <div className='flex justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className="w-14 h-14 text-cyan-800">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <p>Jalan Yos Sudarso No. 2A</p>
                <p>Kota Mataram, Nusa Tenggara Barat</p>
                <p>Kode Pos 83114</p>
              </div>
            </div>
            
            
            <div className='flex'>
              <p>, </p>
              <p>Fax </p>
            </div>
          </div> */}
      </div>
    </div>
  )
}

export default page