import { getTracksFromFolder } from "@/lib/google-drive";
import TrackCard from "@/components/track-card";

export const metadata = {
  title: "Video Game Music | Human-Made Game Soundtracks - Bubby's Beats",
  description: "Dynamic game soundtracks and adaptive music for video games. 100% human-composed by three brothers. License authentic game music for your projects.",
};

export default async function VideoGamesPage() {
  const tracks = await getTracksFromFolder('videogames');

  return (
    <main className="min-h-screen pt-32 pb-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400">
            Video Games
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dynamic soundtracks and adaptive music designed for immersive gaming experiences. 100% human-made.
          </p>
        </div>

        {/* Tracks Grid */}
        {tracks.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No tracks available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}
