import React from 'react'
import { useNavigate , useLocation } from 'react-router-dom'
import { MdCreate, MdOpenInNew } from 'react-icons/md'

function StudentSupportArticle() {
  const navigate = useNavigate()
  const location = useLocation()

  const newArticle = location.state?.newArticle
  
  const article = [
     {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6kXG5tUAalg9p7ERzM8GWSCjTaNJu8kk9GdQ4iQdcNpQQb3L9ZrNEacp_hrpxztERmDkewrk3c7tIVw0FN1iJ0taSkxVSUt10F9vdFHGTObbn-LifDcpYRfF2U1zplMJe_oXECuOr_Qs0QFg0YfN3_mq0bcBFc3EcLbrMDYpD0deMN2Nm85bsRpSxYDQx5X2P9d_rqAJUa2P6iU4xarUkrcPw51KqDwkSKClXI8MDzxUfuge9KSbu6qmBJ1LEyeM1rK7t6WFD0Jgy",
      keyword: "PRODUCTIVITY",
      heading: "Overcoming Academic Burnout",
      decs: "Learn the early warning signs of cognitive fatigue and how to implement a recovery protocol that works."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6kXG5tUAalg9p7ERzM8GWSCjTaNJu8kk9GdQ4iQdcNpQQb3L9ZrNEacp_hrpxztERmDkewrk3c7tIVw0FN1iJ0taSkxVSUt10F9vdFHGTObbn-LifDcpYRfF2U1zplMJe_oXECuOr_Qs0QFg0YfN3_mq0bcBFc3EcLbrMDYpD0deMN2Nm85bsRpSxYDQx5X2P9d_rqAJUa2P6iU4xarUkrcPw51KqDwkSKClXI8MDzxUfuge9KSbu6qmBJ1LEyeM1rK7t6WFD0Jgy",
      keyword: "COGNITION",
      heading: "The Science of Flow State",
      decs: "Discover the neurochemistry behind peak performance and how to trigger flow during your study sessions."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAenqlgDkDe4hjYceeA3gFpF-alNESolwGW7sxSIZcOTHwkXKCEgfGnmY8lnmWUd8RhBFquzYJgVd7mG86csvG4bXrZJd5f8OdRsAyNk3vgZHZN-7ltxgP5oOFt1DQYZlXGCSwB8kSxrXZ-AIAog6Wr6UuaoebYPXcYHOgrZynFORSZAE4uNanc5UYHyjUEtXdBKXFxYPk4SjWhsQQEJzIFpX_tOFCYDHMKtQG_PEbPmaceH1BUttdLWemYeStTQzdiGL4oa4I0eh5S",
      keyword: "LIFE STYLE",
      heading: "Digital Minimalism for Students",
      decs: "How to curate your digital environment to reduce cognitive load and enhance mental well-being.",
    },

  ]

  const allArticle = newArticle ? [newArticle,...article] : article
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


     <button
       onClick={()=>navigate('/create-article')}
      className=" flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">

         

          Create your own <MdCreate/>
        </button>



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

      {allArticle.map((articleCard , index)=>(

         <article className="group cursor-pointer" key={index}>

          <div
            className="mb-4 overflow-hidden border aspect-video rounded-2xl border-white/10"
          >
            <img
              src= {articleCard.image}
              alt={articleCard.heading}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <span
            className="text-sm font-semibold tracking-wider uppercase text-emerald-400"
          >
            {articleCard.keyword}
          </span>

          <h4
            className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400"
          >
            {articleCard.heading}
          </h4>

          <p className="mt-2 text-gray-400 line-clamp-2">
            {articleCard.decs}
          </p>
        </article>

      ))}
       

  </div>
</div>
    </>
  )
}

export default StudentSupportArticle