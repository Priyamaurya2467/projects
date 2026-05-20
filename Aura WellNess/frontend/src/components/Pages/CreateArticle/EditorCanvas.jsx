import React, { useRef, useState } from 'react'
import { MdCategory, MdFormatBold, MdFormatItalic, MdFormatListBulleted, MdFormatQuote, MdSell } from 'react-icons/md'

function EditorCanvas() {

    function EditorCanvas(){
        const editorRef = useRef(null);

        const [title , setTitle] = useState('');
        const [content , setContent] = useState('');
        const [tags , setTags] = useState([]);
        const [tagInput , setTagInput] = useState('');
        const [category , setCategory] = useState('')     
        
        
        const formatText = (command,value = null) => {
            document.execCommand(command , false,value);
            editorRef.current?.focus();
        }

        const wordCount = content.replace(/<[^>]*>/g,'').trim().split(/\s+/).filter(Boolean).length;

        const handleContentChange = () => {
            setContent(editorRef.current.innerHtml);
        }

        const addTag = () => {
            if(tagInput.trim() && !tags.includes(tagInput.trim())){
                setTags([...tags,tagInput.trim()]);
                setTagInput('');
            }
        };

        const removeTag = (tag) => {
            setTags(tags.filter((t)=>t !== tag));
         }

         const saveDraft = () => {
            const draft = {
                title,content,tags,category
            };
            localStorage.setItem('editorDraft',JSON.stringify(draft))
            alert('Draft Saved Successfully');
         }

         const publishPost = () => {
            const post = {title,content,tags,category,publishAt: new Date(),}
         

         console.log("Published Post:" , post);

         alert('Post Published Successfully');

         };
        }

  return (
    <>
 
        <div className="flex flex-col gap-8 lg:col-span-8">

        {/* Title + Actions */}
        <div className="flex flex-col gap-3">

            {/* Title Input */}
            <input
            type="text"
            placeholder="Entry Title..."
            className="w-full border-none bg-transparent text-4xl font-bold tracking-tight text-white placeholder:text-gray-500 focus:outline-none focus:ring-0 sm:text-5xl"
            />

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 px-1">

            {/* Add Tags */}
            <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all hover:bg-white/10">

                <span className="material-symbols-outlined text-sm">
                    <MdSell/>
                </span>

                <span>Add Tags</span>
            </div>

            {/* Category */}
            <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all hover:bg-white/10">

                <span className="material-symbols-outlined text-sm">
                    <MdCategory/>
                </span>

                <span>Select Category</span>
            </div>
            </div>
        </div>

        {/* Editor Panel */}
        <div className="flex min-h-[500px] flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8">

            {/* Toolbar */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">

            {/* Bold */}
            <button className="text-gray-400 transition-colors hover:text-violet-300">

                <span className="material-symbols-outlined">
                    <MdFormatBold/>
                </span>
            </button>

            {/* Italic */}
            <button className="text-gray-400 transition-colors hover:text-violet-300">

                <span className="material-symbols-outlined">
                    <MdFormatItalic/>
                </span>
            </button>

            {/* List */}
            <button className="text-gray-400 transition-colors hover:text-violet-300">

                <span className="material-symbols-outlined">
                    <MdFormatListBulleted/>
                </span>
            </button>

            {/* Link */}
            <button className="text-gray-400 transition-colors hover:text-violet-300">

                <span className="material-symbols-outlined">
                    <MdFormatQuote/>
                </span>
            </button>

            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* Word Count */}
            <span className="text-xs text-gray-500 sm:text-sm">
                428 Words
            </span>
            </div>

            {/* Textarea */}
            <textarea
            placeholder="Begin your mindful journey here..."
            className="custom-scrollbar h-full min-h-[350px] w-full resize-none border-none bg-transparent text-base leading-relaxed text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-0 sm:text-lg"
            />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-end">

            {/* Draft */}
            <button className="rounded-full border border-emerald-400/30 px-8 py-3 text-sm uppercase tracking-[0.2em] text-emerald-300 transition-all hover:bg-emerald-400/5">

            Save Draft
            </button>

            {/* Publish */}
            <button className="rounded-full bg-gradient-to-r from-violet-500 to-purple-500 px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)]">

            Publish to Community
            </button>
        </div>

        </div>
    
    
    </>
  )
}

export default EditorCanvas