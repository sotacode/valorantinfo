import { LanguageState } from './LanguageProvider';


type LanguageActionType =
    | { type: 'esES' }
    | { type: 'enUS' }


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
        default:
            return state;
    }
}