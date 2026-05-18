import { Link } from 'react-router'
import { ArrowRight, User, Briefcase, Mic, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-[#f0ebe3] text-[#5c564e] px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles size={16} />
          ALX Professional Foundations
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[#2d2a26] mb-6 tracking-tight leading-tight">
          Gentille UMUHOZAWASE
        </h1>
        <p className="text-xl md:text-2xl text-[#7a746d] max-w-2xl mx-auto leading-relaxed mb-4">
          Aspiring fashion designer and future data analytics professional passionate about combining creativity with technology.
        </p>
        <div className="w-24 h-1 bg-[#b89f7a] mx-auto rounded-full" />
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Bio Card */}
        <Link
          to="/bio"
          className="group bg-white rounded-2xl p-8 border border-[#e8e2d9] hover:border-[#b89f7a] hover:shadow-lg hover:shadow-[#b89f7a]/5 transition-all duration-300"
        >
          <div className="w-14 h-14 bg-[#f5efe6] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#b89f7a] transition-colors duration-300">
            <User size={26} className="text-[#8b7d6b] group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-[#2d2a26] mb-3">My Bio</h3>
          <p className="text-[#7a746d] text-sm leading-relaxed mb-6">
            Learn about my journey, background, skills, and what drives my passion for creativity and professional growth.
          </p>
          <div className="flex items-center gap-2 text-[#b89f7a] font-medium text-sm group-hover:gap-3 transition-all">
            Read my story <ArrowRight size={16} />
          </div>
        </Link>

        {/* Portfolio Card */}
        <Link
          to="/portfolio"
          className="group bg-white rounded-2xl p-8 border border-[#e8e2d9] hover:border-[#b89f7a] hover:shadow-lg hover:shadow-[#b89f7a]/5 transition-all duration-300"
        >
          <div className="w-14 h-14 bg-[#f5efe6] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#b89f7a] transition-colors duration-300">
            <Briefcase size={26} className="text-[#8b7d6b] group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-[#2d2a26] mb-3">Portfolio</h3>
          <p className="text-[#7a746d] text-sm leading-relaxed mb-6">
            Explore my projects, team collaborations, and the work I've done during my ALX journey and beyond.
          </p>
          <div className="flex items-center gap-2 text-[#b89f7a] font-medium text-sm group-hover:gap-3 transition-all">
            View my work <ArrowRight size={16} />
          </div>
        </Link>

        {/* Elevator Pitch Card */}
        <Link
          to="/elevator-pitch"
          className="group bg-white rounded-2xl p-8 border border-[#e8e2d9] hover:border-[#b89f7a] hover:shadow-lg hover:shadow-[#b89f7a]/5 transition-all duration-300"
        >
          <div className="w-14 h-14 bg-[#f5efe6] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#b89f7a] transition-colors duration-300">
            <Mic size={26} className="text-[#8b7d6b] group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-[#2d2a26] mb-3">Elevator Pitch</h3>
          <p className="text-[#7a746d] text-sm leading-relaxed mb-6">
            My prepared elevator pitch — a concise introduction highlighting my skills, goals, and unique value proposition.
          </p>
          <div className="flex items-center gap-2 text-[#b89f7a] font-medium text-sm group-hover:gap-3 transition-all">
            Watch my pitch <ArrowRight size={16} />
          </div>
        </Link>
      </div>

      {/* Quote Section */}
      <div className="mt-20 text-center bg-white rounded-2xl p-10 md:p-14 border border-[#e8e2d9]">
        <blockquote className="font-display text-2xl md:text-3xl text-[#2d2a26] italic leading-relaxed max-w-3xl mx-auto">
          "The best way to predict the future is to create it. I'm committed to building technology that makes a difference."
        </blockquote>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-[#f0ebe3] rounded-full flex items-center justify-center">
            <User size={18} className="text-[#8b7d6b]" />
          </div>
          <div className="text-left">
            <p className="font-medium text-[#2d2a26] text-sm">Gentille UMUHOZAWASE</p>
            <p className="text-[#9a9389] text-xs">ALX Africa Cohort 2</p>
          </div>
        </div>
      </div>
    </div>
  )
}
