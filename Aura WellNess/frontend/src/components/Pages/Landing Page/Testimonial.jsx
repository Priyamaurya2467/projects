import React from 'react'
import { MdFormatQuote } from 'react-icons/md'

function Testimonial() {
  return (
    <>
    <section className="relative overflow-hidden px-4 py-24">
  
      {/* Background Glow */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-full bg-purple-400/5 blur-[120px]"></div>

      <div className="relative mx-auto max-w-4xl rounded-[48px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl md:p-20">
        
        {/* Quote Icon */}
        <span className="material-symbols-outlined absolute left-10 top-10 text-[64px] text-purple-300 opacity-20">
          <MdFormatQuote/>
        </span>

        {/* Quote */}
        <blockquote className="relative z-10 mb-12 text-3xl italic leading-snug text-white md:text-5xl">
          "MindShield didn't just help me study; it helped me survive my finals
          without the usual burnout. It's the companion every student deserves."
        </blockquote>

        {/* Profile */}
        <div className="flex flex-col items-center">
          
          <img
            className="mb-4 h-20 w-20 rounded-full border-2 border-purple-300 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKZU6FgsQmd--JARTjeJu7veMku-XTY91ivBoMAOg1rM5q9qP8iAx4yiwzQYQmkaPoDs9nrkkQVGZR0RJEUfonDl0WqY_W5Bw2yazCBXqgrEzHMz1FeahxmQ4mQhWamyi2sjOTqUH00vSlUakfnURVlIBhraJ5-zAS1dFNYRIE60RuEx66sFxuGdAIbToFvJJhgSzF2tR5ur-g5jGdN1JZX6MkQ93B63I8v5YvSJQsQSaiGjveM2qq2YUULLM-fk77JDpOB_DGwq92"
            alt="Elena Rodriguez"
          />

          <p className="text-xl font-bold text-white">
            Elena Rodriguez
          </p>

          <p className="mt-1 text-sm uppercase tracking-widest text-gray-400">
            Medical Student, Johns Hopkins
          </p>

        </div>
      </div>

    </section>

    
    </>
  )
}

export default Testimonial