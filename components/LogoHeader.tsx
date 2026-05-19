import Image from 'next/image'

export default function LogoHeader() {
  return (
    <div className="fixed top-6 left-6 flex items-center gap-2 select-none z-50">
      <Image 
        src="/svetra/Svetra.svg" 
        alt="Svetra" 
        width={24} 
        height={24} 
        draggable={false} 
      />
      <span className="text-white/40">/</span>
      <span className="text-white font-mono font-semibold text-lg">
        thron.cfd
      </span>
    </div>
  )
}
