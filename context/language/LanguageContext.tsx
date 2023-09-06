import { createContext } from 'react';

export type LanguageType = 
| "esES"
| "enUS"
| "arAE" 
| "deDE" 
| "esMX" 
| "frFR" 
| "idID" 
| "itIT" 
| "jaJP" 
| "koKR" 
| "plPL" 
| "ptBR" 
| "ruRU" 
| "thTH" 
| "trTR" 
| "viVN" 
| "zhCN" 
| "zhTW" 

interface ContextProps {
    language: LanguageType;
    changeLanguage: (language: LanguageType) => void
}

export const LanguageContext = createContext({} as ContextProps);