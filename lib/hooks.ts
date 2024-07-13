import { useActiveSectionContext } from "@/context/active-section-context";
import { useActiveSectionContextArticle } from "@/context/active-section-context-article";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { SectionNameArticle } from "./types";


export function useSectionInView(sectionName : SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    } , [inView, setActiveSection, timeOfLastClick, sectionName]);
    return { ref }
};

export function useSectionInViewArticle(sectionName : SectionNameArticle, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContextArticle();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    } , [inView, setActiveSection, timeOfLastClick, sectionName]);
    return { ref }
};