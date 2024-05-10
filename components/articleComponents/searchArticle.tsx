"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { article } from '@/lib/articles'; 
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import CopyLink from './copyLink';
import SectionHeading from '../section-heading';

const SearchArticle: React.FC = () => {
  const { ref } = useSectionInView("Articles",);

  
  const [searchText, setSearchText] = useState<string>('');
  const [searchResult, setSearchResult] = useState<{ title: string; description: string; link:string } | null>(null);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const searchTerm = searchText.trim().toLowerCase();

    const matchingArticle = article.find(
      (art) => art.title.toLowerCase().includes(searchTerm)
    );

    if (matchingArticle) {
      setSearchResult({
        title: matchingArticle.title,
        description: matchingArticle.description,
        link: matchingArticle.link
      });
    } else {
      setSearchResult(null);
    }
    
    setSearchPerformed(true);
  };

  return (
    <section ref={ref} className='w-[60%] flex flex-col -mb-36' id='articleTitles'>
      <SectionHeading>Articles</SectionHeading>
      <div className='flex flex-col'>
        <form className="w-full mx-auto" onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-gray-500 focus:border-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:gray-blue-300 dark:focus:border-gray-300"
              required
            />
            <button type='submit' className="text-white absolute end-2.5 bottom-2.5 bg-gray-900 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2">Search</button>
          </div>
        </form>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='max-w-100 mt-10 mb-10 duration-100'>
        {searchPerformed ? (
          searchResult !== null ? (
            <div className='mb-44'>
              <p className='mb-2 font-medium'>May be you search about :</p>
              <div className='flex flex-col p-3 border dark:border-slate-800 hover:dark:border-white border-gray-200 hover:border-black duration-300 rounded-2xl'>
                <div className="italic font-bold mb-3 text-lg rounded-full hover:bg-gray-200 hover:text-black text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white hover:underline p-2 dark:text-gray-300 duration-300">
                  👉 {searchResult.title}
                </div>
                <div className="flex border-l pl-2 border-l-gray-500">
                  <p className="hover:translate-x-3 duration-300">
                    🔱 {searchResult.description}
                  </p>
                </div>
                <div className='flex flex-row-reverse gap-3 items-center mt-3'>
                  <Link href='/' className="w-24 h-12 bg-gray-900 dark:bg-gray-700 dark:hover:bg-black text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 duration-200 cursor-pointer">Open</Link>
                  <CopyLink link={searchResult.link} />
                </div>
              </div>
              <p className='text-xl text-center mt-10 -mb-28 font-bold'>Find here  <span className='underline'>More</span>  Articles 👇</p>
            </div>
          ) : (
            <div className='text-center w-full mb-16'>
              <p>No matching articles found.</p>
            </div>
          )
        ) : null}
      </motion.div>
    </section>
  );
};

export default SearchArticle;
