import { LoginParams } from '../model/LoginParms';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { LoginType } from '../model/LoginType';
import { login } from '@/shared/api/login';

const useLogin = (): UseMutationResult<LoginType, Error, LoginParams> => {
    const mutation = useMutation<LoginType, Error, LoginParams>({
        mutationFn: (params: LoginParams) => login(params),
        onSuccess: (res: LoginType) => {
            alert('로그인에 성공했습니다.');
            return res;
        },
        onError: (err: unknown) => {}
    });

    return mutation;
};

export default useLogin;
