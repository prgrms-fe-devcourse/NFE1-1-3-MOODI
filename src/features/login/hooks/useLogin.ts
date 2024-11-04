import { LoginParams } from '../model/LoginParms';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { LoginType } from '../model/LoginType';
import { login } from '@/shared/api/login';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';

const useLogin = (): UseMutationResult<LoginType, Error, LoginParams> => {
    const { addToast } = useToastStore();

    const mutation = useMutation<LoginType, Error, LoginParams>({
        mutationFn: (params: LoginParams) => login(params),
        onSuccess: (res: LoginType) => {
            addToast('로그인 성공했습니다.', 'success');
            return res;
        },
        onError: (err: Error) => {
            addToast(err.message, 'warning');
        }
    });

    return mutation;
};

export default useLogin;
