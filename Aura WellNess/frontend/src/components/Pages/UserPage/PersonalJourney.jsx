import React from 'react'

function PersonalJourney() {

     const posts = [
    {
      type: "ARTICLE",
      date: "2 days ago",
      title: "The Architecture of Stillness",
      description:
        "How spatial awareness influences neural oscillation during deep work sessions in high-density urban environments...",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAeZ80IZGPWi9Mw8hyoATCxnrStF_9Ybp7vKCPzpLztUk_z5LfrwbL_BGLc2d_13NnUigh3z5dBgvVr7HsXz1VG4jKBPz5rWlahMJOl3rDrx7j6kJPE88kZAb8BQOKbokFXjoDf5UZ0c9IMaLPn-F4mmHQ2vMg7u612VEawDpbJLgK9_mUlK4ZNw98z6jqE5EsrsdsMYbPigQ0bMm_gNsQQeBsgrV5HSj-DHgEPnWoE_4-WUqCiCCIgQGTeMhfhJhrjK0n2xAaF5W66",
      color: "text-emerald-300",
    },
    {
      type: "COMMUNITY POST",
      date: "5 days ago",
      title: "Optimizing Circadian Windows",
      description:
        "Sharing my protocol for aligning 4am wake cycles with MindShield's restorative phase detection...",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD7kGvymZMJtkPM6mdzoiVUTTnoz6D7vJ1KsKJFUKCONY1zqycgW8V29kaaiPenOd5l4XIzPTxjHwZIp84M-WbiOo9IsAx4aG2leuPnByJmpE6RwGxSdZazb2wmmkCn5tmxq7_xLa_voDvmRw6_6j4Hi_jqjKJ-VYlni69bLhSgK5CTIN7h8GpPXMVzPB0jIKXghI3boH8G5xdkADWJvVEYWdaya-BpUY5_KJo9Qpz78zAsYZM-ycFS9tmAORaFZfuoDdS6OzhozoJ_",
      color: "text-violet-300",
    },
  ];
 

  return (
    <>
    <div className="space-y-6">

      {/* Heading */}
      <h3 className="px-2 text-2xl font-bold text-white sm:px-4">
        Shared Vibrations
      </h3>

      {/* Cards */}
      <div className="space-y-5">

        {posts.map((post, index) => (
          <div
            key={index}
            className="group flex cursor-pointer flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 sm:flex-row sm:gap-6 sm:p-6"
          >

            {/* Image */}
            <div className="h-52 w-full overflow-hidden rounded-2xl sm:h-24 sm:w-24 sm:flex-shrink-0">

              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex-1">

              {/* Top */}
              <div className="mb-3 flex items-start justify-between gap-3">

                <span
                  className={`text-xs font-medium uppercase tracking-[0.2em] ${post.color}`}
                >
                  {post.type}
                </span>

                <span className="text-xs text-gray-400">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h4 className="mb-2 text-xl font-semibold text-white">
                {post.title}
              </h4>

              {/* Description */}
              <p className="line-clamp-2 text-sm leading-relaxed text-gray-400 sm:text-base">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
    </>
  )
}

export default PersonalJourney