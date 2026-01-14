import Link from "next/link";
import { Play } from "lucide-react";
import TrackCard from "@/components/track-card";
import CategoryCard from "@/components/category-card";

const featuredTracks = [
  { id: "1", title: "Epic Cinematic Theme", category: "cinema", duration: "3:45", artist: "Bubby's Beats" },
  { id: "2", title: "Retro Game Boss Battle", category: "videogame", duration: "2:30", artist: "Bubby's Beats" },
  { id: "3", title: "Lo-Fi Chill Beat", category: "beats", duration: "3:12", artist: "Bubby's Beats" },
];

export default function Home() {
  return (
    <main className="min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-800 to-cyan-900 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            Bubby&apos;s Beats
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            100% Human-Made Music
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Cinematic Scores • Video Game Soundtracks • Beats
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-300">
            Three brothers crafting authentic, original music for your projects. No AI, just pure human creativity and passion.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#featured"
              className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <Play size={20} />
              Listen Now
            </Link>
            <Link
              href="/custom-work"
              className="px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition"
            >
              Custom Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet the Creators</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
              <h3 className="text-2xl font-bold mb-2">Brother 1</h3>
              <p className="text-gray-600">Composer & Producer</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-full" />
              <h3 className="text-2xl font-bold mb-2">Brother 2</h3>
              <p className="text-gray-600">Composer & Sound Designer</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full" />
              <h3 className="text-2xl font-bold mb-2">Brother 3</h3>
              <p className="text-gray-600">Mixing & Mastering Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tracks */}
      <section id="featured" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Tracks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <CategoryCard
              title="Cinema"
              description="Epic orchestral scores and emotional soundscapes"
              color="cinema"
              href="/cinema"
            />
            <CategoryCard
              title="Video Games"
              description="Dynamic game soundtracks and adaptive music"
              color="videogame"
              href="/video-games"
            />
            <CategoryCard
              title="Beats"
              description="Lo-fi, hip-hop, and electronic beats"
              color="beats"
              href="/beats"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Custom Music?</h2>
          <p className="text-xl mb-8">
            We collaborate with studios to craft unique soundtracks tailored to your vision.
          </p>
          <Link
            href="/custom-work"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Let&apos;s Work Together
          </Link>
        </div>
      </section>
    </main>
  );
}
