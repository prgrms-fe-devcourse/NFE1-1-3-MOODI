import React from 'react';
import axios from 'axios';
import { YouTubeResponse, SpotifyResponse } from '../model/type';
import defaultApi from '../../../shared/api/api';

/**
 * 스포티파이 토큰 발급
 * TODO - 토큰 캐싱 로직 추가 => useSearchMusic
 * TODO - 토큰 만료 체크 로직 추가
 * @returns
 */
const getSpotifyToken = async () => {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            'grant_type=client_credentials',
            {
                headers: {
                    Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error('토큰 발급 에러 :', error);
        throw error;
    }
};

/**
 * 스포티파이 api 인스턴스
 */
const createSpotifyApi = async () => {
    const token = await getSpotifyToken();
    return defaultApi({
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

/**
 * 유튜브 api 인스턴스
 */
const youtubeApi = defaultApi({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY
    }
});

/**
 * 검색어를 이용해 스포티파이 트랙을 검색합니다.
 * @param query
 * @returns
 */
export const spotifySearch = async (
    query: string
): Promise<SpotifyResponse> => {
    try {
        const spotifyApi = await createSpotifyApi();
        const spotifyResponse = await spotifyApi.get('/search', {
            params: {
                q: query,
                type: 'track',
                limit: 1
            }
        });
        return spotifyResponse.data.tracks.items[0] as SpotifyResponse;
    } catch (error) {
        console.log('스포티파이 데이터 패치 에러 : ', error);
        throw new Error('스포티파이 검색 실패');
    }
};

/**
 * 유튜브 ID를 검색해서 반환합니다.
 * @param param0 트랙명, 가수 이름
 * @returns 유튜브 ID
 */
export const youtubeSearch = async ({
    trackName,
    artistName
}: {
    trackName: string;
    artistName: string;
}) => {
    try {
        console.log('유튜브 검색이 실행되다.');
        const youtubeResponse = await youtubeApi.get('/search', {
            params: {
                q: `${trackName} ${artistName}`,
                part: 'snippet',
                type: 'video',
                maxResults: 1
            }
        });
        const youtubeVideo = youtubeResponse.data.items[0] as YouTubeResponse;
        return youtubeVideo.id.videoId;
    } catch (error) {
        console.log('유튜브 데이터 패치 에러 : ', error);
        throw new Error('유튜브 검색 실패');
    }
};
