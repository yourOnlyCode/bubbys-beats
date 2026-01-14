import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/audio-player";
import NavBar from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bubby's Beats | Human-Made Cinematic Music, Video Game Soundtracks & Beats",
  description: "Professional human-composed music for cinema, video games, and beats. Three brothers crafting authentic, original soundtracks and custom compositions for studios and creators. 100% human-made, no AI.",
  keywords: [
    "human-made music",
    "cinematic music",
    "video game music",
    "beats",
    "custom music composition",
    "film scoring",
    "game soundtracks",
    "original music",
    "music licensing",
    "authentic music",
    "human composers",
    "no AI music"
  ],
  authors: [{ name: "Bubby's Beats" }],
  creator: "Bubby's Beats",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bubbysbeats.com",
    title: "Bubby's Beats | Human-Made Music for Cinema, Games & More",
    description: "Professional human-composed music by three brothers. Cinematic scores, video game soundtracks, and beats. Custom compositions for studios. 100% human-made.",
    siteName: "Bubby's Beats",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubby's Beats | Human-Made Music",
    description: "Professional human-composed music for cinema, video games, and beats.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Bubby's Beats",
              "description": "Human-made cinematic music, video game soundtracks, and beats composed by three brothers",
              "genre": ["Cinematic", "Video Game Music", "Beats"],
              "url": "https://bubbysbeats.com",
              "sameAs": [],
              "offers": {
                "@type": "Offer",
                "category": "Music Licensing & Custom Composition"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}
