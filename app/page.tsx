import { GradientBackground } from "@/components/gradient-background"
import { ProfileCard, MobileProfileCard } from "@/components/profile-card"
import LogoHeader from "@/components/LogoHeader"
import GithubLink from "@/components/GithubLink"
import { Instrument_Serif } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LogoHeader />
      <GradientBackground />
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <ProfileCard />
      <MobileProfileCard />
      <GithubLink />
    </main>
  )
}
