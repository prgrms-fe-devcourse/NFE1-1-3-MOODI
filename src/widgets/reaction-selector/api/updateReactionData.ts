import axios, { AxiosError } from 'axios';

const API_URL =
    'https://td3axvf8x7.execute-api.ap-northeast-2.amazonaws.com/moodi/reaction';

export interface ReactionData {
    diary_id: number;
    reaction_type: string;
    user_email: string;
}

export const postReaction = async (
    reactionData: ReactionData,
    token: string
) => {
    try {
        const response = await axios.post(API_URL, reactionData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('Reaction update successfully:', response.data);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        console.error(
            'Error posting reaction:',
            axiosError.response?.data || axiosError.message
        );
        throw error;
    }
};
