import {
    PatchUserParmasType,
    PatchUserResponseType
} from '@/shared/model/userTypes';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import React from 'react';
import { updateUser } from '@/shared/api/user';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';

const usePatch = (): UseMutationResult<
    PatchUserResponseType,
    Error,
    PatchUserParmasType
> => {
    const { addToast } = useToastStore();
    const mutation = useMutation<
        PatchUserResponseType,
        Error,
        PatchUserParmasType
    >({
        mutationFn: (params: PatchUserParmasType) => updateUser(params),
        onSuccess: (res: PatchUserResponseType) => {
            addToast(res.message, 'success');
        },
        onError: (err: Error) => {
            addToast(
                err.message || '업데이트 중 오류가 발생했습니다.',
                'error'
            );
        }
    });
    return mutation;
};

export default usePatch;
