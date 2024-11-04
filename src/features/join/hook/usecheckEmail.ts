import { Waring } from '../../Toast/ui/Toast.stories';
import { useMutation } from '@tanstack/react-query';
import { checkEmailExists } from '@/shared/api/checkEmail';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import { useState } from 'react';

interface CheckEmailResponse {
    exists: boolean;
    message: string;
}

/**
 * 이메일 중복 여부를 확인하는 커스텀 훅
 */
const useCheckEmail = () => {
    const { addToast } = useToastStore();
    const [isEmailAvailable, setIsEmailAvailable] = useState<boolean | null>(
        null
    );

    const {
        mutate: checkEmail,
        data,
        error
    } = useMutation<CheckEmailResponse, Error, string>({
        mutationFn: (email: string) => checkEmailExists(email),
        onSuccess: (res) => {
            addToast(res.message, res.exists === false ? 'success' : 'warning');
            setIsEmailAvailable(!res.exists);
        },
        onError: () => {
            addToast('서버와 응답에 실패했습니다', 'error');
        }
    });

    return {
        checkEmail,
        isEmailAvailable,
        data,
        error
    };
};

export default useCheckEmail;
