import React from 'react'

function SkillsProgress() {
    const skills = [
        {name: "DSA" , progress: 85},
        {name: "Aptitude" , progress: 70},
        {name: "Resume Building" , progress: 90},
        {name: "Communication" , progress: 75},
        {name: "Mock Interviews" , progress: 60},

    ]
  return (
    <>
    <div className='bg-white rounded-3xl p-6 shadow-md'>
        <h2 className='text-2xl font-semibold mb-6'>
            Skills Progress
        </h2>
        <div className='space-y-5'>
            {skills.map((skill) => (
                <div key={skill.name}>
                    <div className='flex justify-between mb-1'>
                        <span>{skill.name}</span>
                        <span>{skill.progress}%</span>
                    </div>

                    <div className='w-full bg-gray-200 rounded-full h-3'>
                        <div className='bg-purple-600 h-3 rounded-full' style={{width: `${skill.progress}%`}}/>
                    </div>
                    </div>
            ))}
        

        </div>
    </div>
    </>
  )
}

export default SkillsProgress