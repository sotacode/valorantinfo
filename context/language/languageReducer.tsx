import { LanguageState } from './LanguageProvider';


type LanguageActionType =
    | { type: 'esES' }
    | { type: 'enUS' }
    | { type: 'arAE' }
    | { type: 'deDE' }
    | { type: 'esMX' }
    | { type: 'frFR' }
    | { type: 'idID' }
    | { type: 'itIT' }
    | { type: 'jaJP' }
    | { type: 'koKR' }
    | { type: 'plPL' }
    | { type: 'ptBR' }
    | { type: 'ruRU' }
    | { type: 'thTH' }
    | { type: 'trTR' }
    | { type: 'viVN' }
    | { type: 'zhCN' }
    | { type: 'zhTW' }


export const languageReducer = (state: LanguageState, action: LanguageActionType): LanguageState => {
    switch (action.type) {
        case 'esES':
            return {
                ...state,
                language: 'esES'
            }
        case 'enUS':
            return {
                ...state,
                language: 'enUS'
            }
        case 'arAE':
            return {
                ...state,
                language: 'arAE'
            }
        case 'deDE':
            return {
                ...state,
                language: 'deDE'
            }
        case 'esMX':
            return {
                ...state,
                language: 'esMX'
            }
        case 'frFR':
            return {
                ...state,
                language: 'frFR'
            }
        case 'idID':
            return {
                ...state,
                language: 'idID'
            }
        case 'itIT':
            return {
                ...state,
                language: 'itIT'
            }
        case 'jaJP':
            return {
                ...state,
                language: 'jaJP'
            }
        case 'koKR':
            return {
                ...state,
                language: 'koKR'
            }
        case 'plPL':
            return {
                ...state,
                language: 'plPL'
            }
        case 'ptBR':
            return {
                ...state,
                language: 'ptBR'
            }
        case 'ruRU':
            return {
                ...state,
                language: 'ruRU'
            }
        case 'thTH':
            return {
                ...state,
                language: 'thTH'
            }
        case 'trTR':
            return {
                ...state,
                language: 'trTR'
            }
        case 'viVN':
            return {
                ...state,
                language: 'viVN'
            }
        case 'zhCN':
            return {
                ...state,
                language: 'zhCN'
            }
        case 'zhTW':
            return {
                ...state,
                language: 'zhTW'
            }
        default: 
            return state;
    }
}