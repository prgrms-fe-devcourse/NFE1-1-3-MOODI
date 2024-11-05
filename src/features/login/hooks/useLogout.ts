import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import useLocalStorage from '@/shared/hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from './useAuthStore';

const useLogout = () => {
    const navigate = useNavigate();
    const { addToast } = useToastStore();
    const { setValue: setToken } = useLocalStorage<string>('token', '');
    const { setUserInfo } = useAuthStore();

    const handleLogout = () => {
        try {
            setToken('');
            setUserInfo('', '', false);
            addToast('로그아웃되었습니다.', 'success');
            navigate('/login');
        } catch (error) {
            addToast('로그아웃 처리에 실패했어요.', 'error');
        }
    };
    return { handleLogout };
};

export default useLogout;
