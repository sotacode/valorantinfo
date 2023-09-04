import { createContext } from 'react';

export type LanguageType = 
| "esES"
| "enUS" 

interface ContextProps {
    language: LanguageType;

    changeToEnglish: () => void,
    changeToSpanish: () => void
}

export const LanguageContext = createContext({} as ContextProps);