import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2d2a26] text-[#c4bdb3] py-10 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-lg text-[#faf8f5] mb-1">Gentille UMUHOZAWASE</p>
            <p className="text-sm text-[#9a9389]">ALX Africa Student</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#3d3935] hover:bg-[#4d4945] transition-colors"
            >
              <Github size={18} className="text-[#faf8f5]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#3d3935] hover:bg-[#4d4945] transition-colors"
            >
              <Linkedin size={18} className="text-[#faf8f5]" />
            </a>
            <a
              href="mailto:jane.doe@email.com"
              className="p-2 rounded-lg bg-[#3d3935] hover:bg-[#4d4945] transition-colors"
            >
              <Mail size={18} className="text-[#faf8f5]" />
            </a>
          </div>
        </div>

        <div className="border-t border-[#3d3935] mt-8 pt-6 text-center">
          <p className="text-xs text-[#7a746d] flex items-center justify-center gap-1">
            Built with <Heart size={12} className="text-[#b89f7a]" /> for ALX Professional Foundations Week 11
          </p>
        </div>
      </div>
    </footer>
  )
}
