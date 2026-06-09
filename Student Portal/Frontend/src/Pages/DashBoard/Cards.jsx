import React, {useEffect,useState} from 'react'
import { HiOutlineFire } from 'react-icons/hi'
import { MdLoop, MdOutlineBadge, MdTrendingUp} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import StudyHours from './Stats Cards/StudyHours/StudyHours'


function Cards() {
    
    const navigate = useNavigate()

      const  [currentStreak, setCurrentStreak] = useState(0);
      const [longestStreak, setLongestStreak] = useState(0);
      const [activities, setActivities] = useState([]);
    
      useEffect(() => {
        const storedActivities =
          JSON.parse(localStorage.getItem("studyActivities")) || [];
    
        setActivities(storedActivities);
    
        const streak = calculateCurrentStreak(storedActivities);
        setCurrentStreak(streak);
    
        const longest = calculateLongestStreak(storedActivities);
        setLongestStreak(longest);
      }, []);
    
      const calculateCurrentStreak = (dates) => {
        let streak = 0;
        let currentDate = new Date();
    
        while (true) {
          const dateString = currentDate.toISOString().split("T")[0];
    
          if (dates.includes(dateString)) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
          } else {
            break;
          }
        }
    
        return streak;
      };
    
      const calculateLongestStreak = (dates) => {
        if (!dates.length) return 0;
    
        const sortedDates = [...dates].sort();
    
        let longest = 1;
        let current = 1;
    
        for (let i = 1; i < sortedDates.length; i++) {
          const prev = new Date(sortedDates[i - 1]);
          const curr = new Date(sortedDates[i]);
    
          const diff = (curr - prev) / (1000 * 60 * 60 * 24);
    
          if (diff === 1) {
            current++;
            longest = Math.max(longest, current);
          } else {
            current = 1;
          }
        }
    
        return longest;
      };

      const markStudyActivity = () => {
        const today = new Date().toISOString().split("T")[0];

        const updatedActivities = [...activities];

        if (!updatedActivities.includes(today)) {
        updatedActivities.push(today);

        localStorage.setItem(
            "studyActivities",
            JSON.stringify(updatedActivities)
        );

        setActivities(updatedActivities);

        setCurrentStreak(
            calculateCurrentStreak(updatedActivities)
        );

        setLongestStreak(
            calculateLongestStreak(updatedActivities)
        );
        }
        
      };

      const card = [
        {
            icon: <HiOutlineFire/>,
            site: 'streak',
            heading: "Study Streak",
            daysLeft:  `${currentStreak} days`,
            bg: "bg-gradient-to-r from-orange-300 to-orange-500",
            caption: "Keep it going"
        },
        {

            icon: <MdLoop/>,
            site: 'score',
            heading: "Current Score",
            daysLeft: "0/900",
            bg: "bg-gradient-to-r from-purple-500 to-purple-300",
            caption: "Let's grind"

        },
        {
            icon: <MdTrendingUp/>,
            site: 'hours',
            heading: "Study Hours",
            daysLeft: "0 hrs",
            bg: "bg-gradient-to-r from-green-200 to-green-400",
            caption: "On track for goals"

        },
        {
            icon: <MdOutlineBadge/>,
            site: 'placement',
            heading: "Placement Ready",
            daysLeft: "0",
            bg: "bg-gradient-to-r from-purple-500 to-purple-300",
            caption: "Polish your skills"

        }
    ]

    const studyData = {
      todayHours: 3.5,
      weeklyHours: 22,
      monthlyHours: 87,

      weeklyData :[
        {day: "Mon" , hours: 2},
        {day: "Tue" , hours: 2},
        {day: "Wed" , hours: 2},
        {day: "Thur" , hours: 2},
        {day: "Fri" , hours: 2},
        {day: "Sat" , hours: 2},
        {day: "Sun" , hours: 2},
        
      ],

      sessions: [
        {
          subject: "React",
          duration: "2 hrs",
          date: "2026-06-09",
        },
        {
          subject: "React",
          duration: "2 hrs",
          date: "2026-06-09",
        },
        
      ],

      productivityInsights: 
        "You study most effectively between 7 PM and 10 PM"
    }

    
  return (
    <>

    <div className='flex flex-row justify-evenly rounded-4xl px-2 '>
        {card.map((item,index)=>(

            <div className='group flex flex-col gap-1 p-4 px-5 bg-white w-60 rounded-4xl shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_rgba(168,85,247,0.25)] hover:-translate-y-1' key={index} onClick={() => navigate(`/dashboard/${item.site}`, {
                state: {
                    activities,currentStreak,longestStreak,...studyData
                }
            })}>

                <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow[0_10px_25px_rgba(168,85,247,0.45)] `}>
                {item.icon}
                 </div>

                 <p className='text-m text-gray-600'>{item.heading}</p>
                 <h1 className='text-black text-2xl font-semibold'>{item.daysLeft} </h1>
                 <p className='text-sm font-light text-gray-400'>{item.caption}</p>

            </div>

            

            

        ))}
        


    </div>




    </>
  )
}

export default Cards