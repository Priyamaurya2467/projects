import React from "react";

export function WeeklyHoursChart({data=[]}){
   

    return (
        <div className="bg-white rounded-3xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-6">
                 📊 Weekly Study Hours
            </h2>

            <div className="space-y-4">

                {data.map((item) => (
                    <div key={item.day}>
                        <div className="flex justify-between mb-1">
                            <span>{item.day}</span>
                            <span>{item.hours} hrs</span>
                        </div>

                        <div className="w-full bg-gray-200 h-3 rounded-full">
                            <div
                                className="bg-purple-600 rounded-full"
                                style={{
                                    width: `${(item.hours/5)*100}%`
                                }}
                            />

                            </div>


                        </div>
                    
                ))}

            </div>
        </div>
    )
}

