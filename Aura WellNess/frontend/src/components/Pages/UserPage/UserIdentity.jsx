import React from 'react'

function UserIdentity() {
  return (
    <>

  
    <section className="mb-16">

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-xl sm:p-8">

        {/* Decorative Glow */}
        <div className="absolute -right-24 -top-24 h-64 w-64 animate-pulse rounded-full bg-violet-400/10 blur-[90px]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-end">

          {/* Image */}
          <div className="group relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-emerald-400/20 blur-xl transition-all duration-300 group-hover:blur-2xl" />

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-n9iGPAU9uzbWN4SaxGiGRgOyv8C-5siuBhg37A43ipQs5BTRuGDuTn5zSDsXysXgI0E6FxaBZmGv06vNRgdfuDfdSy6HuwviDAt1gwoqvpvcqBO0KtGXis-95gK-DU16XEArev8BTiAURlanlrMJZMLkTxvXJWVkmCRun4yEqLBKvWOF45O7Q9p11MgDta4l_E7QlLqZM3fOEApZvley1IUFTJLXXq3ZnNmtgI67fApXwzkp0J2ZX3GvYzv0Pxm7rdDtEMnddzqL"
              alt="Alex Chen"
              className="relative z-10 h-40 w-40 rounded-2xl border border-white/20 object-cover shadow-2xl sm:h-48 sm:w-48"
            />
          </div>

          {/* Text Content */}
          <div className="z-10 flex-1 space-y-4 text-center md:text-left">

            {/* Name + Badge */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Alex Chen
              </h1>

              <span className="mx-auto flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-300 md:mx-0">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                Deep Flow State Active
              </span>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">

              Interdisciplinary researcher focused on the intersection of cognitive load management and neural-rhythm architecture. Optimizing for long-term academic resilience.
            </p>
          </div>
        </div>
      </div>
    </section>

    
    </>
  )
}

export default UserIdentity