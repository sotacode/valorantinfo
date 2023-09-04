import React, { useEffect, useReducer } from 'react'
import { LanguageContext, LanguageType } from './LanguageContext';
import { languageReducer } from './languageReducer';
import { getLocalStorageLanguage, setLocalStorageLanguage } from '@/utils/localStorage';

export interface LanguageState {
    language: LanguageType;
}

const LANGUAGE_INITIAL_STATE: LanguageState = {
    language: 'esES'
}


export default function LanguageProvider({ children }: { children: React.ReactNode}){
    const [state, dispatch] = useReducer(languageReducer, LANGUAGE_INITIAL_STATE)
    const changeToEnglish = ()=>{
        dispatch({type: 'enUS'})
    }
    const changeToSpanish = ()=>{
        dispatch({type: 'esES'})
    }
    useEffect(() => {
        const currentLanguage= getLocalStorageLanguage();
        if(currentLanguage==null){
            setLocalStorageLanguage("esES")
            dispatch({type: 'esES'})
        }
      }, [])
    
    return (
        <LanguageContext.Provider value={{
            ...state,
            changeToEnglish,
            changeToSpanish
        }}>
            {children}
        </LanguageContext.Provider>
    )
}