import React from "react";

function WelcomeStep({user}) {
  return (
    <>

    <div className="text-center p-3">
        <h1 className="text-3xl font-bold tracking-wider">
          Welcome to StudentSphere 👋
        </h1>

        <p className="mt-1 text-gray-600">
          Let's get you set up for success
        </p>
    </div> 

    <div className="w-full max-w-4xl rounded-3xl p-7 bg-white/80 backdrop-blur-lg shadow-xl border border-white/30 mt-7 flex flex-col items-center">

    

        <div className='w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 flex items-center justify-center '>
                <p className="text-4xl">🚀</p>
        </div>
        <h1 className="text-2xl font-stretch-expanded ml-6 font-semibold pt-5 tracking-wide text-center">Hello , {user?.name || "Student"}! 👋</h1>


        <div className="text-center p-4 text-gray-600">
            <p>Welcome to StudentSphere, your complete student</p>
            <p>success platform. This quick setup will personlize your</p>
            <p>experience in just 3 minutes.</p>
        </div>

        <ul className="p-2 ml-3">
            <li className="text-gray-600 p-1"><span className="text-green-600">✓</span> ⭐ Personalized learning paths</li>
            <li className="text-gray-600 p-1"><span className="text-green-600">✓</span> 📊 Real-time progress tracking</li>
            <li className="text-gray-600 p-1"><span className="text-green-600">✓</span> 🎯 Smart goal recommendations</li>
            <li className="text-gray-600 p-1"><span className="text-green-600">✓</span> 🤝 Community support & resource</li>
           
        </ul>

  
    </div>
    
    </>
  );
}

export default WelcomeStep;