import React from 'react'
import { MdOpenInNew } from 'react-icons/md'

function StudentSupportArticle() {
  return (
    <>
    
   
<div
  className="md:col-span-3 p-8 mt-6 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/10"
>


  <div className="flex items-end justify-between mb-8">

    <div>
      <h3 className="text-2xl font-bold text-white">
        Student Support Articles
      </h3>

      <p className="mt-1 text-gray-400">
        Science-backed strategies for academic thriving.
      </p>
    </div>

    <a
      href="#"
      className="flex items-center gap-1 font-bold transition-colors text-cyan-400 hover:underline"
    >
      View All

      <span className="material-symbols-outlined text-sm">
        <MdOpenInNew/>
      </span>
    </a>
  </div>


  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

    
    <article className="group cursor-pointer">

      <div
        className="mb-4 overflow-hidden border aspect-video rounded-2xl border-white/10"
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6kXG5tUAalg9p7ERzM8GWSCjTaNJu8kk9GdQ4iQdcNpQQb3L9ZrNEacp_hrpxztERmDkewrk3c7tIVw0FN1iJ0taSkxVSUt10F9vdFHGTObbn-LifDcpYRfF2U1zplMJe_oXECuOr_Qs0QFg0YfN3_mq0bcBFc3EcLbrMDYpD0deMN2Nm85bsRpSxYDQx5X2P9d_rqAJUa2P6iU4xarUkrcPw51KqDwkSKClXI8MDzxUfuge9KSbu6qmBJ1LEyeM1rK7t6WFD0Jgy"
          alt="Productivity workspace"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <span
        className="text-sm font-semibold tracking-wider uppercase text-purple-400"
      >
        Productivity
      </span>

      <h4
        className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400"
      >
        Overcoming Academic Burnout
      </h4>

      <p className="mt-2 text-gray-400 line-clamp-2">
        Learn the early warning signs of cognitive fatigue and how to
        implement a recovery protocol that works.
      </p>
    </article>

   
    <article className="group cursor-pointer">

      <div
        className="mb-4 overflow-hidden border aspect-video rounded-2xl border-white/10"
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvdHvKy8vzlo9MxY8TratALsh2JFeQCR8taq4pK1mRBLaUlLk9SQcHPhwht6buf28olEjAIzFTdM-fdEtZe-xI0fB29OckrgZffJ6kGRdUnkqSti4mFkgaBD-yec0HDQ1seBwPZ4C12UY-2AEEio1zpN4SViKtBTahnuCkeJb0FkYziUSO7b88g9DQ-BP8IlLmAejmHEuC0vLcF1l1vn0-bcbALIO6erqBsvikrIAEoDK2O1VOZYfUSatSQweyZWqAn7AjMymb6V_3"
          alt="Flow state concept"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <span
        className="text-sm font-semibold tracking-wider uppercase text-cyan-400"
      >
        Cognition
      </span>

      <h4
        className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400"
      >
        The Science of Flow State
      </h4>

      <p className="mt-2 text-gray-400 line-clamp-2">
        Discover the neurochemistry behind peak performance and how to
        trigger flow during your study sessions.
      </p>
    </article>

   
    <article className="group cursor-pointer">

      <div
        className="mb-4 overflow-hidden border aspect-video rounded-2xl border-white/10"
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAenqlgDkDe4hjYceeA3gFpF-alNESolwGW7sxSIZcOTHwkXKCEgfGnmY8lnmWUd8RhBFquzYJgVd7mG86csvG4bXrZJd5f8OdRsAyNk3vgZHZN-7ltxgP5oOFt1DQYZlXGCSwB8kSxrXZ-AIAog6Wr6UuaoebYPXcYHOgrZynFORSZAE4uNanc5UYHyjUEtXdBKXFxYPk4SjWhsQQEJzIFpX_tOFCYDHMKtQG_PEbPmaceH1BUttdLWemYeStTQzdiGL4oa4I0eh5S"
          alt="Digital minimalism"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <span
        className="text-sm font-semibold tracking-wider uppercase text-emerald-400"
      >
        Life Style
      </span>

      <h4
        className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400"
      >
        Digital Minimalism for Students
      </h4>

      <p className="mt-2 text-gray-400 line-clamp-2">
        How to curate your digital environment to reduce cognitive load
        and enhance mental well-being.
      </p>
    </article>

  </div>
</div>
    </>
  )
}

export default StudentSupportArticle