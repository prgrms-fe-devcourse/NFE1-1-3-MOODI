import { LoginParams } from '../model/LoginParms';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { LoginType } from '../model/LoginType';
import { login } from '@/shared/api/login';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import useLocalStorage from '@/shared/hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { decodeJwtPayload } from '../util/decodeJwtPayload ';
import { useAuthStore } from './useAuthStore';

interface userType {
    email: string;
    username: string;
}

const useLogin = (): UseMutationResult<LoginType, Error, LoginParams> => {
    const navigate = useNavigate();
    const { addToast } = useToastStore();
    const { setValue: setToken } = useLocalStorage<string>('token', '');
    const { email, userName, setUserInfo } = useAuthStore();
    const mutation = useMutation<LoginType, Error, LoginParams>({
        mutationFn: (params: LoginParams) => login(params),
        onSuccess: (res: LoginType) => {
            addToast('로그인 성공했습니다.', 'success');
            setToken(res.token);
            const payload = decodeJwtPayload<userType>(res.token);
            if (payload) {
                setUserInfo(payload.username, payload.email, true);
            }
            navigate('/');
        },
        onError: (err: Error) => {
            addToast(err.message, 'error');
        }
    });

    return mutation;
};

export default useLogin;
