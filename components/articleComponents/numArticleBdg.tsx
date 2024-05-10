import { article } from '@/lib/articles';
import React from 'react'

export default function NumArticleBdg() {
    const articleNumber: number = article.length;
    return (
        <div className="absolute text-center w-5 h-5 text-xs font-mediumnpm text-white bg-red-500 border-2 border-gray-900 rounded-full -top-1 -end-1 dark:border-white hover:w-6 hover:h-6 !transition-all dark:text-gray-900">
            {articleNumber}
        </div>
    )
}
