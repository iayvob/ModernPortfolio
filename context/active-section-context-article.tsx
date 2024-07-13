"use client"

import React, { createContext, useContext, useState } from "react";
import { SectionNameArticle } from "@/lib/types";


type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};


type ActiveSectionContextTypeArticle = {
    activeSection: SectionNameArticle;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionNameArticle>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContextArticle = createContext<ActiveSectionContextTypeArticle | null>(null);

export default function ActiveSectionContextProviderArticle({ children } : ActiveSectionContextProviderProps) {

    const [activeSection, setActiveSection] = useState<SectionNameArticle>(0);
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);


return <ActiveSectionContextArticle.Provider value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,}}>{children}</ActiveSectionContextArticle.Provider>;
}


export function useActiveSectionContextArticle() {
    const context = useContext(ActiveSectionContextArticle);

    if (context === null) {
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
    }

    return context;
}