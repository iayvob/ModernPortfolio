import { linksType } from "./data";
import { article } from "./articles";


export type SectionName = typeof linksType[number]["name"];

export type SectionNameArticle = typeof article[number]["id"];