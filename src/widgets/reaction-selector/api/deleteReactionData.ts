import axios, { AxiosError } from 'axios';

const API_URL =
    'https://td3axvf8x7.execute-api.ap-northeast-2.amazonaws.com/moodi/reaction';

interface DeleteReactionProps {
    id: number;
    token: string;
}

const deleteReaction = async ({ id, token }: DeleteReactionProps) => {
    try {
        const response = await axios.delete(`${API_URL}?id=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('Reaction deleted successfully:', response.data);
    } catch (error) {
        const axiosError = error as AxiosError;
        console.error(
            'Failed to delete reaction:',
            axiosError.response?.data || axiosError.message
        );
    }
};

export default deleteReaction;
