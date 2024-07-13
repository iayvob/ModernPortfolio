import { links } from "./data";
import { article } from "./articles";


export type SectionName = typeof links[number]["name"];

export type SectionNameArticle = typeof article[number]["id"];