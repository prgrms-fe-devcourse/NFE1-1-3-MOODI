import { create } from 'zustand';
import { Toast } from '../model/type';

interface ToastStore {
    toasts: Toast[];
    addToast: (
        message: string,
        variant: 'success' | 'warning' | 'error'
    ) => void;
    removeToast: (id: number) => void;
}

/**
 *  addToasdt새로운 Toast 메시지를 추가하고 2초 후 자동 제거
 *  호출 시
 *  const { addToast } = useToastStore(); 불러와서
 *  () => addToast('Success message!', 'success') 형식으로 사용해주세요
 * @param message - 표시할 메시지 내용
 * @param variant - 메시지 타입 ('success' | 'warning' | 'error')
 */
export const useToastStore = create<ToastStore>((set) => ({
    toasts: [],
    addToast: (message, variant) => {
        const id = Date.now();
        set((state) => ({
            toasts: [...state.toasts, { id, message, variant }]
        }));

        setTimeout(() => {
            set((state) => ({
                toasts: state.toasts.filter((toast) => toast.id !== id)
            }));
        }, 2000);
    },
    removeToast: (id) =>
        set((state) => ({
            toasts: state.toasts.filter((toast) => toast.id !== id)
        }))
}));
