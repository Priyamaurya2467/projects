import React from 'react'

function Branding() {
  return (
    <>

    <div className="lg:col-span-4 lg:sticky lg:top-12 space-y-8">

  <div className="space-y-4">

    <h1
      className="text-5xl font-bold bg-clip-text text-transparent
                 bg-gradient-to-r from-cyan-400 to-blue-500 inline-block"
    >
      MindShield AI
    </h1>

    <p className="text-3xl md:text-5xl text-white leading-tight font-semibold">
      Your Digital Sanctuary For Academic Excellence.
    </p>

    <p className="text-lg text-gray-300">
      Join a community of students leveraging Zen-Futurism to master focus
      and conquer burnout.
    </p>

  </div>

  <div
    className="flex items-center gap-4 p-4 rounded-2xl
               backdrop-blur-xl bg-white/5 border border-white/10"
  >

    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-cyan-400/30">
      <img
        alt="Student Testimonial"
        className="h-full w-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa5XmNDtsxwel8Db-ic2MVLETFcsknZ6Ni9AnmVZ1_ttWGWk72OUvQXcod_VY8wTK1GKpwaLwBB7aXj-Xm1n8xq84X3uT6pN6nZ-iJO3DH-COHGYv0bbeIKYPYdJ8trYDAUA0BimsQ9PfPC_suAubdEZbZuERyOKlF-TIslPHuplxqBt2oHgJLZRpbQurz6arr2bbD2QOW3UWG6ZWSO-RY8NdQnwYXewu9sxEhQ438vd0SJ5LC8jj__NXOs6yJ4Qt4nqo9K4TtNuDS"
      />
    </div>

    <div>
      <p className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">
        Active Members
      </p>

      <p className="text-base text-white">
        +12k Students online now
      </p>
    </div>

  </div>

</div>
    
    </>
  )
}

export default Branding