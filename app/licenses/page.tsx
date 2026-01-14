import { Check } from "lucide-react";

export const metadata = {
  title: "Music Licenses | License Human-Made Music - Bubby's Beats",
  description: "License authentic human-made music for your projects. Flexible licensing options for personal, commercial, and broadcast use.",
};

export default function LicensesPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Music Licenses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent licensing for human-made music. Choose the license that fits your project.
          </p>
        </div>

        {/* License Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Personal License */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-purple-400 transition">
            <h3 className="text-2xl font-bold mb-2">Personal</h3>
            <div className="text-4xl font-bold mb-6">$49</div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>Personal projects</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>Social media content</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>YouTube videos</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>Up to 100K views</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-gray-100 text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition">
              Select License
            </button>
          </div>

          {/* Commercial License */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg p-8 transform scale-105 shadow-xl">
            <div className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Commercial</h3>
            <div className="text-4xl font-bold mb-6">$199</div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2">
                <Check className="text-white flex-shrink-0" size={20} />
                <span>Commercial projects</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-white flex-shrink-0" size={20} />
                <span>Advertising campaigns</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-white flex-shrink-0" size={20} />
                <span>Indie games & films</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-white flex-shrink-0" size={20} />
                <span>Unlimited distribution</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition">
              Select License
            </button>
          </div>

          {/* Broadcast License */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-purple-400 transition">
            <h3 className="text-2xl font-bold mb-2">Broadcast</h3>
            <div className="text-4xl font-bold mb-6">$499</div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>TV & streaming</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>Major productions</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>Worldwide rights</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-gray-100 text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition">
              Select License
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Licensing FAQ</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h4 className="font-bold mb-2">What&apos;s included in a license?</h4>
              <p className="text-gray-600">
                All licenses include the right to use the track in your specified project type, along with high-quality audio files (WAV & MP3).
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Can I use the music on multiple projects?</h4>
              <p className="text-gray-600">
                Each license is for a single project. For multiple projects, you&apos;ll need separate licenses or consider our custom work options.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Do you offer exclusive licenses?</h4>
              <p className="text-gray-600">
                Yes! Contact us for exclusive licensing options where the track is removed from our catalog and licensed only to you.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">What about attribution?</h4>
              <p className="text-gray-600">
                Attribution is appreciated but not required for commercial and broadcast licenses. Personal licenses require credit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
