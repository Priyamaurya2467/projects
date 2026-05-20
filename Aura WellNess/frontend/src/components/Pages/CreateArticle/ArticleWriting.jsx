import React from 'react'
import TopNav from './TopNav'
import EditorCanvas from './EditorCanvas'
import AiWriting from './AiWriting'
import BottomNav from './BottomNav'

function ArticleWriting() {
  return (
    <>

    <div className='overflow-x-hidden font-medium'>
        <TopNav/>

        <main className='mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-12 lg:px-8'>
            <EditorCanvas/>
            <AiWriting/>
        </main>

        <BottomNav/>

    </div>
    
    </>
  )
}

export default ArticleWriting