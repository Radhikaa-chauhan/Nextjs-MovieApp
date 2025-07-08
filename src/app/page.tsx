import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (

 <div className='relative w-full h-screen overflow-hidden'>
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  >
    <source src="\animations\intro.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>




    <div className='flex min-h-screen flex-col items-center justify-center w-10/12 mx-auto p-10 text-indigo-200'>
   <div className="bg-black/30 backdrop-blur-md p-4 rounded-xl">
  <h1 className="text-6xl md:text-7xl font-bold text-white text-center">
    🎬 Movie App
  </h1>


<p className="mt-4 text-base md:text-lg font-medium text-white max-w-xl text-center drop-shadow-[0_1px_3px_rgba(255,255,255,0.3)]">
  Organize your favorite movies like a true director.
</p> </div>
<div className="mt-10 flex flex-col md:flex-row items-center gap-6">
  <Link href="/add-movie">
    <Button
      className="px-10 py-5 text-xl font-semibold backdrop-blur-lg bg-white/10 border-2 border-white/30 text-white rounded-2xl shadow-lg hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
    >
      🎥 Add Movie
    </Button>
  </Link>
  
  <Link href="/all-movies">
    <Button
      className="px-10 py-5 text-xl font-semibold backdrop-blur-lg bg-white/10 border-2 border-white/30 text-white rounded-2xl shadow-lg hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
    >
      🎞️ View All Movies
    </Button>
  </Link>
</div>

 </div>
</div>
  )
}

export default HomePage
