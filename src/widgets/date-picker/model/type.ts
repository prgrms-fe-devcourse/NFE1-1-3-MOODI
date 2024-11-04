export interface DatePickerProps {
    initialDate?: Date;
    disabledDates?: string[];
    onSelectDate: (date: Date) => void;
}
