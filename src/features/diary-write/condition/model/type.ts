export const CONDITIONS = [
    '매우 나쁨',
    '나쁨',
    '보통',
    '좋음',
    '매우 좋음'
] as const;

export type Condition = (typeof CONDITIONS)[number];

export interface ConditionButtonGroupProps {
    selectedCondition: Condition | null;
    onChange: (condition: Condition) => void;
}
