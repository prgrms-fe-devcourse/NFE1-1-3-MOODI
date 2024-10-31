export interface Toast {
    id: number;
    variant: 'success' | 'warning' | 'error';
    message: string;
}
