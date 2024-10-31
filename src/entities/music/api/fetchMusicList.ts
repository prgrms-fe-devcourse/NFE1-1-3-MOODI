import { MusicItem, YouTubeResponse, SpotifyResponse } from '../model/type';
import defaultApi from '../../../shared/api/api';
import axios from 'axios';
import React from 'react';

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
 * 음악 검색 함수
 * @param query 검색어 - gpt 응답 / 사용자 직접 입력
 * @returns
 */
export const searchMusic = async (query: string): Promise<MusicItem> => {
    try {
        // 스포티파이 검색
        const spotifyApi = await createSpotifyApi();
        const spotifyResponse = await spotifyApi.get('/search', {
            params: {
                q: query,
                type: 'track',
                limit: 1
            }
        });

        const spotifyTrack = spotifyResponse.data.tracks
            .items[0] as SpotifyResponse;

        // 유튜브 검색
        const youtubeResponse = await youtubeApi.get('/search', {
            params: {
                q: `${spotifyTrack.name} ${spotifyTrack.artists[0].name}`,
                part: 'snippet',
                type: 'video',
                maxResults: 1
            }
        });

        const youtubeVideo = youtubeResponse.data.items[0] as YouTubeResponse;

        return {
            title: spotifyTrack.name,
            artist: spotifyTrack.artists[0].name,
            thumbnailUrl: spotifyTrack.album.images[0].url,
            // youtubeId: 'M5aEiDSx7kI'
            // api 할당량 제한으로 그냥 아무 영상 id로 고정하고 테스트 중입니다.
            youtubeId: youtubeVideo.id.videoId
        };
    } catch (error) {
        console.error('스포티파이 음악 검색 실패 :', error);
        throw error;
    }
};
