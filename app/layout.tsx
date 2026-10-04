import type { Metadata, Viewport } from "next";
import { Jost, Libre_Caslon_Text, Pinyon_Script } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import BackgroundMusic from "./components/BackgroundMusic";
import Corners from "./components/Corners";
import NavigationBar from "./components/NavigationBar";
import Providers from "./components/Providers";
import "./globals.css";

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const pinyon = Pinyon_Script({ variable: "--font-pinyon", subsets: ["latin"], weight: "400" });
const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joaquin & Krisna",
  description: "You Are Invited! Wedding invitation for Joaquin & Krisna",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#89CFF0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${caslon.variable} ${pinyon.variable} ${jost.variable}`}>
      <body>
        <Providers>
          <div className="min-h-dvh p-2 sm:p-4 md:p-6">
            {/* overflow-clip (not hidden) so the sticky nav keeps working */}
            <div className="relative flex min-h-[calc(100dvh-1rem)] flex-col overflow-clip rounded-2xl bg-paper shadow-sm sm:min-h-[calc(100dvh-2rem)] sm:rounded-3xl md:min-h-[calc(100dvh-3rem)]">
              <Corners />
              <NavigationBar />
              <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-28 pt-8 sm:px-8 sm:pt-12">
                {children}
              </main>
            </div>
          </div>
          <BackgroundMusic />
          <Toaster richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}
