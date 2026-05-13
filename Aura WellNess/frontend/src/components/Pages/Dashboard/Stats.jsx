import React from 'react'

function Stats() {

    const statsDetail = [
        {
            amount : "85%",
            detail: "Stress Reduction"
        },
        {
            amount : "+2.4hr",
            detail: "Daily Focus Gain"
        },
        {
            amount : "120k+",
            detail: "Active Students"
        },
    ]
  return (
    <>

    <section className='mb-24 py-12'>
        <div className='grid grid-cols-1 divide-y divide-white/10 rounded-3xl border border-white/5 px-8 py-12 backdrop-blur-xl md:grid-cols-3 md:divide-y-0'>
            {statsDetail.map((statDesc, index)=>(
                <div className='px-4 py-8 text-center md:py-0' key={index}>
                <h3 className='mb-2 text-5xl text-center md:py-0'>{statDesc.amount}</h3>
                <p className='text-base text-gray-400'>{statDesc.detail}</p>
            </div>

            ))}
            
        </div>
    </section>
    
    
    </>
  )
}

export default Stats