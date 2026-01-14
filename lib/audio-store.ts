import { create } from 'zustand';

export interface Track {
  id: string;
  title: string;
  artist: string;
  category: string;
  duration: string;
  audioUrl?: string;
}

interface AudioStore {
  currentTrack: Track | null;
  isPlaying: boolean;
  setCurrentTrack: (track: Track) => void;
  togglePlay: () => void;
  setIsPlaying: (playing: boolean) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  currentTrack: null,
  isPlaying: false,
  setCurrentTrack: (track) => set({ currentTrack: track, isPlaying: true }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
}));
