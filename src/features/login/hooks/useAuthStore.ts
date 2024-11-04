import { create } from 'zustand';

interface AuthStore {
    email: string;
    userName: string;
    isLoggedin: boolean;
    setUserInfo: (email: string, userName: string, isLoggedin: boolean) => void;
}

/**
 * 사용자 인증 상태를 관리하는 훅
 * @returns {AuthStore} - 이메일과 사용자를 업데이트하는 함수가 포함된 객체.
 */
export const useAuthStore = create<AuthStore>((set) => ({
    email: '',
    userName: '',
    isLoggedin: false,
    setUserInfo: (email: string, userName: string, isLoggedin: boolean) => {
        set((state) => ({ ...state, email, userName, isLoggedin }));
    }
}));
