import React from 'react'

function Roadmap({roadmap=[]}) {
    
  return (
    <>

    <div className='bg-white rounded-3xl p-6 shadow-md'>
        <h2 className='text-2xl font-semibold mb-6'>Placement Roadmap</h2>

        <div className='space-y-4'>
            {roadmap.map((step,index) => (
                <div
                    key={index}
                    className='flex justify-between border-b pb-3'>
                        <span>{step.title}</span>
                        <span className={`font-medium ${
                                step.status === "Completed"
                                ? "text-green-600"
                                : step.status === "In Progress"
                                ? "text-yellow-500"
                                : "text-red-500"
                            }`}
                            >{step.status
                            }</span>

                        
                </div>

            ))}

        </div>
        </div>
                
        

    
    
    </>
  )
}

export default Roadmap