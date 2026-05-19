import Link from "next/link"

export function ProfileCard() {
  return (
    <div className="hidden md:flex items-center justify-center">
      <h1 className="text-white text-7xl font-semibold tracking-tight">
        ThronDeveloper
      </h1>
    </div>
  )
}

export function MobileProfileCard() {
  return (
    <div className="flex md:hidden flex-col items-center justify-center min-h-screen px-6">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-white text-xl font-semibold">ThronDeveloper</h2>
        <p className="text-white/40 text-xs tracking-wider uppercase">Front-end Dev.</p>
        <p className="text-white/60 text-sm">TypeScript & JavaScript</p>

        <div className="flex flex-col gap-3 mt-2 w-full">
          <Link href="#" className="text-white/80 text-sm hover:text-white transition-colors antialiased text-center">
            SvetraCloud
          </Link>
          <Link href="https://openchat.cfd" target="_blank" className="text-white/80 text-sm hover:text-white transition-colors antialiased text-center">
            OpenChat
          </Link>
        </div>

        <div className="flex gap-5 mt-4">
          <Link href="https://open.spotify.com/user/shxzzcxp082r7eammisoxyg0g?si=152ba0ce59f14ec8" target="_blank" className="text-white/40 hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 11.5c2.5-1 5.5-1 8 0" />
              <path d="M7 8.5c3-1.5 6.5-1.5 10 0" />
              <path d="M6.5 15c3.5-1.5 7.5-1.5 11 0" />
            </svg>
          </Link>
          <Link href="https://github.com/ThronDeveloper" target="_blank" className="text-white/40 hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <Link href="https://x.com" target="_blank" className="text-white/40 hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="https://instagram.com/umut.tsx" target="_blank" className="text-white/40 hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
