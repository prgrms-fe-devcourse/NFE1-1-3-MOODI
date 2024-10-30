import { create } from 'zustand';
import { MusicItem } from './type';

interface MusicStore {
    selectedMusic: MusicItem | null;
    setSelectedMusic: (music: MusicItem | null) => void;
    clearSelectedMusic: () => void;
}

export const useMusicStore = create<MusicStore>((set) => ({
    selectedMusic: null,
    setSelectedMusic: (music) => set({ selectedMusic: music }),
    clearSelectedMusic: () => set({ selectedMusic: null })
}));

export default useMusicStore;
