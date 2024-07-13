"use client";

import { article } from '@/lib/articles'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import CopyLink from './copyLink';
import { useRouter } from 'next/navigation';

export default function ArticleList() {
    
  const { ref } = useSectionInView("Articles",);
  const router = useRouter();

  return (
    <div ref={ref} id='allArticles' className='w-[min(100%,38rem)] mt-10 mb-10'>
        <motion.p initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='text-2xl font-medium mb-3 -mt-32'>All Articles:</motion.p>
        <ul className="flex flex-col">
                {
                    article.map((article, index) => (
                        <motion.li className="flex flex-col p-3 mb-5 border dark:border-slate-800 hover:dark:border-white border-gray-200 hover:border-black duration-300 rounded-2xl" key={index} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                            <div className="italic font-bold mb-3 text-lg rounded-full hover:bg-gray-200 hover:text-black text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white hover:underline p-2 dark:text-gray-300 duration-300">
                                👉 {article.title}
                            </div>
                            <div className="flex border-l pl-2 border-l-gray-500">
                                <p className="hover:translate-x-3 duration-300">
                                    🔱  {article.description}
                                </p>
                            </div>
                            <div className='flex flex-row-reverse gap-3 items-center mt-3'>
                                <button onClick={() => router.push(`/articles/article/${article.id}`)} className="w-24 h-12 bg-gray-900 dark:bg-gray-700 dark:hover:bg-black text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 duration-200 cursor-pointer">Open</button>
                                <CopyLink link={article.link} />
                            </div>
                        </motion.li>
                    ))
                }
            </ul>
            <div className="w-full max-w-85 h-px bg-gray-300 dark:bg-gray-700 mt-5"></div>
    </div>
)}