import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { join } from '@/shared/api/join';
import { JoinParam } from '../model/joinParams';
import { JoinType } from '../model/JoinType';
import { AxiosError } from 'axios';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '@/shared/hooks/useLocalStorage';

/**
 * 회원가입 API 호출을 위한 커스텀 훅
 */
const useJoin = (): UseMutationResult<JoinType, AxiosError, JoinParam> => {
    const navigate = useNavigate();
    const { setValue: setToken } = useLocalStorage<string>('token', '');

    const { addToast } = useToastStore();
    const mutation = useMutation<JoinType, AxiosError, JoinParam>({
        mutationFn: (params: JoinParam) => join(params),
        onSuccess: (data) => {
            if (data.token) {
                addToast(data.message, 'success');
                setToken(data.token);
                navigate('/login');
            } else {
                addToast(data.message, 'error');
            }
        },
        onError: (error: Error) => {
            addToast(error.message, 'error');
        }
    });
    return mutation;
};

export default useJoin;
