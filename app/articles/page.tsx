import Info from '@/components/articleComponents/info'
import SectionDivider from '@/components/section-divider'
import React from 'react'
import SearchArticle from '@/components/articleComponents/searchArticle'
import ArticleList from '@/components/articleComponents/ariclesList'
import { Toaster } from 'react-hot-toast'
import Contact from '@/components/contact'


export default function page() {
  return (
    <main className="flex flex-col items-center px-4">
      <Info />
      <SectionDivider />
      <SearchArticle />
      <SectionDivider />
      <ArticleList />
      <Toaster position="top-right"/>
      <Contact />
    </main>
    
  )
}
