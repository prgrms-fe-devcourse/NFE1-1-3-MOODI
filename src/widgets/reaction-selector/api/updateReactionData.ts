import axios, { AxiosError } from 'axios';

const API_URL =
    'https://td3axvf8x7.execute-api.ap-northeast-2.amazonaws.com/moodi/reaction';

const Token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pbmpvb24iLCJlbWFpbCI6ImFubmF3YTZAbmF2ZXIuY29tLmNvbSIsImlhdCI6MTczMDQ0MzkwOCwiZXhwIjoxNzMwNDU0NzA4fQ.Z_k18rxZ1zWW0VaEqBZGbne9a5ouhWqF2AQU2WkWx4I`;

export interface ReactionData {
    diary_id: number;
    reaction_type: string;
    user_email: string;
}

// POST 요청 함수
export const postReaction = async (reactionData: ReactionData) => {
    try {
        const response = await axios.post(API_URL, reactionData, {
            headers: {
                Authorization: `Bearer ${Token}`,
                'Content-Type': 'application/json'
            }
        });
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
