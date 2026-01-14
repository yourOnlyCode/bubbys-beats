"use client";

import { Play } from "lucide-react";
import { useAudioStore, Track } from "@/lib/audio-store";

export default function TrackCard({ track }: { track: Track }) {
  const setCurrentTrack = useAudioStore((state) => state.setCurrentTrack);

  const categoryColors = {
    cinema: "from-purple-500 to-purple-700",
    videogame: "from-pink-500 to-pink-700",
    beats: "from-cyan-500 to-cyan-700",
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
      <div
        className={`h-48 bg-gradient-to-br ${categoryColors[track.category as keyof typeof categoryColors]} flex items-center justify-center`}
      >
        <button
          onClick={() => setCurrentTrack(track)}
          className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition transform group-hover:scale-110"
        >
          <Play size={28} className="text-gray-900 ml-1" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{track.title}</h3>
        <p className="text-sm text-gray-600">{track.artist}</p>
        <p className="text-sm text-gray-500 mt-2">{track.duration}</p>
      </div>
    </div>
  );
}
