export const SEARCH_TYPE = {
    GPT: 'gptSearch',
    USER: 'userSearch'
} as const;

export type SearchType = (typeof SEARCH_TYPE)[keyof typeof SEARCH_TYPE];

export interface SearchModeButtonGroupProps {
    selectedType: SearchType;
    onChange: (type: SearchType) => void;
}
