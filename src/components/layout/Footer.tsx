import { Heart, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2d2a26] text-[#c4bdb3] py-10 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-lg text-[#faf8f5] mb-1">Gentille UMUHOZAWASE</p>
            <p className="text-sm text-[#9a9389] mb-3">Aspiring Fashion Designer & Data Analytics Professional</p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 sm:gap-4 text-sm text-[#9a9389]">
              <a href="mailto:umuhozawasegentille@gmail.com" className="flex items-center gap-1.5 hover:text-[#b89f7a] transition-colors">
                <Mail size={14} />
                umuhozawasegentille@gmail.com
              </a>
              <a href="tel:+250788207729" className="flex items-center gap-1.5 hover:text-[#b89f7a] transition-colors">
                <Phone size={14} />
                +250 788 207 729
              </a>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:umuhozawasegentille@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#b89f7a] text-[#2d2a26] text-sm font-medium hover:bg-[#c4a97f] transition-colors"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href="tel:+250788207729"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3d3935] text-[#faf8f5] text-sm font-medium hover:bg-[#4d4945] transition-colors"
            >
              <Phone size={16} />
              Call Me
            </a>
          </div>
        </div>

        <div className="border-t border-[#3d3935] mt-8 pt-6 text-center">
          <p className="text-xs text-[#7a746d] flex items-center justify-center gap-1">
            Built with <Heart size={12} className="text-[#b89f7a]" /> for ALX Professional Foundations
          </p>
        </div>
      </div>
    </footer>
  )
}
