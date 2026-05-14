import React, { useState } from 'react'

function OnboardingForm() {
    const totalSteps = 7;
    const [step , setStep] = useState(1);
    const [submitted , setSubmitted] = useState(false);

    const [form , setForm] = useState({
        sleep : 7,
        study: 4,
        stress: 2,
        mood: 8,
        focus: 45,
        exam: 3,
        emotional: '',
        relax: '',
    });

    const progress = (step/totalSteps)*100;

      const update = (key, value) => {
    setForm((prev) => ({
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
             </div>
             )}
    
            return(
                <>
                <div className='max-w-[700px] mx-auto p-6'>
                    <div className='h-2 flex-1 bg-gray-200 rounded-full overflow-hidden'>
                        <div className='h-full bg-emerald-500 transition-all duration-500'
                        style={{width: `${progress}`}}/>

                    </div>

                    <span className='ml-4 text-sm text-gray-500'>
                        Step {step}/{totalSteps}
                    </span>
                </div>

                <form onSubmit={handleSubmit} className='bg-white rounded-2xl shadow-lg p-8 space-y-8'>

                    {/* Sleep */}
                    <div>
                        <div className='flex justify-between'>
                            <label>Sleep Hours</label>
                            <span>{form.sleep}</span>
                        </div>

                        <input 
                            type="range"
                            min="0"
                            max="12"
                            value={form.sleep}
                            onChange={(e)=>update("Sleep", Number(e.target.value))}
                            className='w-full'
                        />
                    </div>

                    {/* Study */}
                    <div>
                        <div className='flex justify-between'>
                            <label>Study Hours</label>
                            <span>{form.study}</span>
                        </div>

                        <input 
                            type="range"
                            min="0"
                            max="12"
                            value={form.study}
                            onChange={(e)=>update("Study", Number(e.target.value))}
                            className='w-full'
                        />
                    </div>

                    {/* Stress */}
                    <div>
                        <div className='flex justify-between'>
                            <label>Stress Level</label>
                            <span>
                                {form.stress <= 3
                                ? "Low" : form.stress <= 7
                                ? "Moderate" : "High"}{" "}
                                ({form.stress})
                            </span>
                        </div>

                        <input type="range"
                                min="1"
                                max="10"
                                value={form.stress}
                                onChange={(e)=>update("stress",Number(e.target.value))}
                                className='w-full'
                        
                        />
                    </div>

                     {/* Mood */}

                    <div>
                        <div className='flex justify-between'>
                            <label>Mood</label>
                            <span className='text-2xl'>
                                {form.mood <= 4
                                ? "😟" : form.stress <= 7
                                ? "😐" : "😊"}
                                
                            </span>
                        </div>

                        <input type="range"
                                min="1"
                                max="10"
                                value={form.mood}
                                onChange={(e)=>update("mood",Number(e.target.value))}
                                className='w-full'
                        
                        />
                    </div>

                    {/* Focus */}

                    <div>
                        <div className='flex justify-between'>
                            <label>Focus Duration</label>
                            <span className='text-2xl'>
                                {form.focus}
                            </span>
                        </div>

                        <input type="range"
                                min="0"
                                max="120"
                                step="5"
                                value={form.focus}
                                onChange={(e)=>update("focus",Number(e.target.value))}
                                className='w-full'   
                        />
                    </div>

                     {/* Exam Pressure */}

                    <div>
                        <div className='flex justify-between'>
                            <label>Exam Pressure</label>
                            <span className='text-2xl'>
                                {form.exam}/10
                            </span>
                        </div>

                        <input type="range"
                                min="1"
                                max="10"
                                step="5"
                                value={form.exam}
                                onChange={(e)=>update("exam",Number(e.target.value))}
                                className='w-full'   
                        />
                    </div>

                    {/* Emotional */}
                    <textarea 
                        placeholder="Describe how you're feeling..."
                        value={form.emotional}
                        onChange={(e)=>update("emotional" , e.target.value)}
                        className='w-full p-4 border rounded-xl'
                    
                    ></textarea>

                      {/* Relaxation */}
                      <input 
                        placeholder='Relaxation methods (music,walking...)'
                        value={form.relax}
                        onChange={(e)=>update("relax",e.target.value)}
                        className='w-full p-4 border rounded-xl'
                        />

                          {/* Buttons */}
                          <div className='flex gap-3 pt-4'>
                            <button
                                type='button'
                                onClick={()=>setStep((s)=>Math.max(1,s-1))}
                                className='flex-1 py-3 bg-gray-200 rounded-xl'>
                                    Back
                            </button>

                             <button
                                type='button'
                                onClick={()=>setStep((s)=>Math.min(1,s+1))}
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