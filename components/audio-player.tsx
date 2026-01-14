"use client";

import { useAudioStore } from "@/lib/audio-store";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export default function AudioPlayer() {
  const { currentTrack, isPlaying, togglePlay } = useAudioStore();

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white border-t border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Track Info */}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold truncate">{currentTrack.title}</h4>
            <p className="text-sm text-gray-400 truncate">{currentTrack.artist}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button className="hover:text-purple-400 transition">
              <SkipBack size={20} />
            </button>
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:scale-105 transition"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="hover:text-purple-400 transition">
              <SkipForward size={20} />
            </button>
          </div>

          {/* Duration */}
          <div className="flex-1 text-right text-sm text-gray-400">
            {currentTrack.duration}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div className="bg-purple-500 h-1 rounded-full w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
