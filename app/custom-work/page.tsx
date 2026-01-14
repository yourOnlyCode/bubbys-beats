import { Mail, Briefcase, Music2, Users } from "lucide-react";

export const metadata = {
  title: "Custom Music Composition | Work With Us - Bubby's Beats",
  description: "Collaborate with three human composers to create custom music for your film, game, or project. Tailored soundtracks crafted specifically for your vision.",
};

export default function CustomWorkPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Custom Work</h1>
          <p className="text-xl text-gray-600">
            Let&apos;s create something unique together. We collaborate with studios and creators to craft tailored music for your vision.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
            <Music2 className="text-purple-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Film Scoring</h3>
            <p className="text-gray-600">
              Original scores tailored to your film&apos;s emotional arc and narrative needs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-cyan-50 p-8 rounded-lg">
            <Briefcase className="text-pink-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Game Soundtracks</h3>
            <p className="text-gray-600">
              Adaptive music systems and dynamic soundscapes for immersive gameplay.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-purple-50 p-8 rounded-lg">
            <Users className="text-cyan-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Brand Music</h3>
            <p className="text-gray-600">
              Sonic branding and custom tracks that capture your brand&apos;s identity.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-8 rounded-lg">
            <Mail className="text-purple-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Content Creation</h3>
            <p className="text-gray-600">
              Custom beats and background music for YouTube, podcasts, and social media.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-bold mb-1">Discovery Call</h4>
                <p className="text-gray-600">We discuss your project, vision, and musical needs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-bold mb-1">Concept & Demo</h4>
                <p className="text-gray-600">We create initial concepts and demos for your approval.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-bold mb-1">Production</h4>
                <p className="text-gray-600">Full production with revisions based on your feedback.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-bold mb-1">Delivery</h4>
                <p className="text-gray-600">Final masters delivered in your preferred format.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-lg mb-8">Let&apos;s discuss your project and create something amazing together.</p>
          <a
            href="mailto:contact@bubbysbeats.com"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  );
}
