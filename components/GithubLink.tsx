import Link from 'next/link'

export default function GithubLink() {
  return (
    <Link 
      href="https://git.new/thron.cfd"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-6 left-6 text-sm text-white hover:text-white/70 transition-colors select-none"
    >
      Github
    </Link>
  )
}
