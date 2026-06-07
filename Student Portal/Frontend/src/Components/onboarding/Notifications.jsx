
function NotificationStep({ formData, setFormData }) {
  return (
   
    <>
      <div className="text-center p-3">
        <h1 className="text-3xl font-bold tracking-wider">
          Almost Done! Final Settings ✨
        </h1>

        <p className="mt-1 text-gray-600">
          Configure your Preferences
        </p>
      </div>

      <div className="w-full max-w-4xl rounded-3xl p-7 bg-white/80 backdrop-blur-lg shadow-xl border border-white/30 mt-7 flex flex-col items-center">

    

        <div className='w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 flex items-center justify-center '>
                <p className="text-4xl">✨</p>
        </div>
        <h1 className="text-2xl font-stretch-expanded ml-6 font-semibold pt-5 tracking-wide text-center">You're All Set!</h1>


        <div className="text-center p-4 text-gray-600">
            <p>Your profile is ready. Let's customize your notifications.</p>
        </div>

        <div className="flex flex-col  gap-16 p-8 w-full">
          <div className="flex flex-row justify-between">
          <div >
            <label className="flex items-center gap-3 cursor-pointer"><span>📬 Push Notifications</span></label>
            <p className="text-sm text-gray-600">Get remainders for study sessions</p>
          </div>
          <div>
            <input type="checkbox"
            checked={formData.pushNotification}
            onChange={(e)=>
              setFormData((prev)=>({
                ...prev,
                pushNotification: e.target.checked
              }))
            } 
            className="hidden"/>

            <div 
              onClick={()=>
                setFormData((prev)=>({
                  ...prev,
                  pushNotification : !prev.pushNotification

                })
              )}
                  

              
              
              
            
            className={`w-12 h-6 rounded-full transition-all duration-300 ${
              formData.pushNotification ? "bg-purple-600" : "bg-gray-300"
            }`}>
              <div
                className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-all duration-300 ${
                  formData.pushNotification
                  ? "translate-x-6"
                  : "translate-x-0.5"
                }`}
              
              />
            </div>
          </div>
          </div>

          <div className="flex flex-row justify-between">
          <div >
            <label className="flex items-center gap-3 cursor-pointer"><span>📧 Email Updates</span></label>
            <p className="text-sm text-gray-600">Weekly progress summaries</p>
          </div>
          <div>
            <input type="checkbox"
            checked={formData.emailUpdates}
           
            onChange={(e)=>
              setFormData((prev)=>({
                ...prev,
                emailUpdates: e.target.checked
              }))
            } 
            className="w-5 h-5 cursor-pointer"/>

            
          </div>
          </div>


            <div className="flex flex-row justify-between">
              <div >
                <label className="flex items-center gap-3 cursor-pointer"><span>💬 Community Activity</span></label>
                <p className="text-sm text-gray-600">Stay updated on discussions</p>
              </div>
              <div>
                <input type="checkbox"
              
              
                
                className="w-5 h-5 cursor-pointer"/>

                
              </div>

            </div>

            <div className="bg-purple-100 border-2 border-purple-400 p-5 rounded-4xl">
              <h2 className="text-sm font-semibold pb-2">Your Setup Summary</h2>
              <ul className="text-xs p- text-gray-500">
                <li className="p-1" >✓  Goals : {formData.goals}</li>
                <li className="p-1">✓  Weekly commitment: {formData.weeklyHours}</li>
                <li className="p-1">✓  Study time: {formData.studyBest} </li>
                <li className="p-1">✓  Timezone: {formData.timeZone}</li>                
              </ul>
            </div>



          </div>
        </div>

  
    

      
    </>
  
  );
}

export default NotificationStep;