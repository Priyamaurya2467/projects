import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function OnboardingForm({formupdate , setFormupdate}) {
    
    const [submitted , setSubmitted] = useState(false);
    const navigate = useNavigate()


    const update = (key, value) => {
  setFormupdate((prev) => ({
    ...prev,
    [key]: value,
  }));
};

    

 

  // ✅ FIXED
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

    if(submitted){
        return (
             

             <div className='text-center py-20 space-y-6'>
                <div className='w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center'>
                    <span className='text-5xl'>🎉</span>
                </div>

                <h2 className='text-2xl font-bold'>Setup Complete</h2>
                <p className='text-gray-500'>
                    Your MindShield AI profile has been created.
                </p>
                
                             <button
                                type='text'
                                onClick={()=>navigate('/dashboard')}
                                
                                className='flex-1 py-3 px-2 bg-gray-200 rounded-xl'>
                                    Go to Dashboard
                            </button>
             </div>
             )}
    
            return(
                <>
               

                <form onSubmit={handleSubmit} className='bg-white rounded-2xl shadow-lg p-8 space-y-8'>

                    {/* Sleep */}
                    <div>
                        <div className='flex justify-between'>
                            <label>Sleep Hours</label>
                            <span>{formupdate.sleep}</span>
                        </div>

                        <input 
                            type="range"
                            min="0"
                            max="12"
                            value={formupdate.sleep}
                            onChange={(e)=>update("sleep", Number(e.target.value))}
                            className='w-full'
                        />
                    </div>

                    {/* Study */}
                    <div>
                        <div className='flex justify-between'>
                            <label>Study Hours</label>
                            <span>{formupdate.study}</span>
                        </div>

                        <input 
                            type="range"
                            min="0"
                            max="12"
                            value={formupdate.study}
                            onChange={(e)=>update("study", Number(e.target.value))}
                            className='w-full'
                        />
                    </div>

                    {/* Stress */}
                    <div>
                        <div className='flex justify-between'>
                            <label>Stress Level</label>
                            <span>
                                {formupdate.stress <= 3
                                ? "Low" : formupdate.stress <= 7
                                ? "Moderate" : "High"}{" "}
                                ({formupdate.stress})
                            </span>
                        </div>

                        <input type="range"
                                min="1"
                                max="10"
                                value={formupdate.stress}
                                onChange={(e)=>update("stress",Number(e.target.value))}
                                className='w-full'
                        
                        />
                    </div>

                     {/* Mood */}

                    <div>
                        <div className='flex justify-between'>
                            <label>Mood</label>
                            <span className='text-2xl'>
                                {formupdate.mood <= 2
                                ? "😢" : formupdate.mood <= 5
                                ?"🙂" : formupdate.mood <= 8 ? "😊":"😄"}
                                
                            </span>
                        </div>

                        <input type="range"
                                min="1"
                                max="11"
                                value={formupdate.mood}
                                onChange={(e)=>update("mood",Number(e.target.value))}
                                className='w-full'
                        
                        />
                    </div>

                    {/* Focus */}

                    <div>
                        <div className='flex justify-between'>
                            <label>Focus Duration</label>
                            <span className='text-2xl'>
                                {formupdate.focus}
                            </span>
                        </div>

                        <input type="range"
                                min="0"
                                max="120"
                                step="5"
                                value={formupdate.focus}
                                onChange={(e)=>update("focus",Number(e.target.value))}
                                className='w-full'   
                        />
                    </div>

                     {/* Exam Pressure */}

                    <div>
                        <div className='flex justify-between'>
                            <label>Exam Pressure</label>
                            <span className='text-2xl'>
                                {formupdate.exam}/10
                            </span>
                        </div>

                        <input type="range"
                                min="1"
                                max="10"
                                step="1"
                                value={formupdate.exam}
                                onChange={(e)=>update("exam",Number(e.target.value))}
                                className='w-full'   
                        />
                    </div>

                    {/* Emotional */}
                    <textarea 
                        placeholder="Describe how you're feeling..."
                        value={formupdate.emotional}
                        onChange={(e)=>update("emotional" , e.target.value)}
                        className='w-full p-4 border rounded-xl'
                    
                    ></textarea>

                      {/* Relaxation */}
                      <input 
                        placeholder='Relaxation methods (music,walking...)'
                        value={formupdate.relax}
                        onChange={(e)=>update("relax",e.target.value)}
                        className='w-full p-4 border rounded-xl'
                        />

                          {/* Buttons */}
                          <div className='flex gap-3 pt-4'>
                            <button
                                type='button'
                                onClick={()=>navigate('/')}
                                className='flex-1 py-3 bg-gray-200 rounded-xl'>
                                    Back
                            </button>

                             <button
                                type='submit'
                                
                                className='flex-1 py-3 bg-gray-200 rounded-xl'>
                                    Next
                            </button>

                          </div>

                          <button
                            type='submit'
                            className='w-full py-4 bg-black text-white rounded-xl mt-4'
                          
                          >Complete Step</button>
                </form>
                
                </>

            )
        
    }

export default OnboardingForm