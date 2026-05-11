import { MapPin, GraduationCap, Target, Heart, Scissors, Globe, Lightbulb, Palette } from 'lucide-react'

export default function Bio() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#f0ebe3] text-[#5c564e] px-4 py-2 rounded-full text-sm font-medium mb-4">
          <GraduationCap size={16} />
          About Me
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#2d2a26] mb-4">My Bio</h1>
        <div className="w-16 h-1 bg-[#b89f7a] mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left Column - Profile */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-2xl p-8 border border-[#e8e2d9] sticky top-24">
            {/* Avatar Placeholder */}
            <div className="w-32 h-32 bg-[#f0ebe3] rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="font-display text-3xl text-[#8b7d6b]">GU</span>
            </div>

            <h2 className="font-display text-2xl font-semibold text-[#2d2a26] text-center mb-2">Gentille UMUHOZAWASE</h2>
            <p className="text-[#7a746d] text-center text-sm mb-6">Creative Entrepreneur & ALX Student</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#5c564e]">
                <MapPin size={16} className="text-[#b89f7a]" />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#5c564e]">
                <GraduationCap size={16} className="text-[#b89f7a]" />
                <span>ALX Africa</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#5c564e]">
                <Palette size={16} className="text-[#b89f7a]" />
                <span>Fashion Design & Business</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#e8e2d9]">
              <h4 className="font-semibold text-[#2d2a26] text-sm mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Creativity', 'Problem-Solving', 'Adaptability', 'Fashion Design', 'Sewing', 'Business Skills'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#f5efe6] text-[#5c564e] text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Bio Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* About Section */}
          <div className="bg-white rounded-2xl p-8 border border-[#e8e2d9]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#f5efe6] rounded-lg flex items-center justify-center">
                <Heart size={20} className="text-[#8b7d6b]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#2d2a26]">My Story</h3>
            </div>
            <div className="text-[#5c564e] leading-relaxed space-y-4">
              <p>
                UMUHOZAWASE Gentille is a creative and motivated individual building a personal brand focused on fashion design and professional growth. She is passionate about creating unique clothing pieces while also developing her digital and business skills.
              </p>
              <p>
                She aims to grow into a successful entrepreneur and professional who combines creativity with innovation to make an impact. She has already demonstrated her skills through designing and sewing custom outfits and consistently improving her abilities through learning programs like ALX.
              </p>
              <p>
                Gentille is known for her creativity, determination, and willingness to learn, which continue to drive her toward achieving her long-term goals. She believes that combining creativity with discipline is the key to delivering unique, well-thought-out results while maintaining reliability and consistency.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl p-8 border border-[#e8e2d9]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#f5efe6] rounded-lg flex items-center justify-center">
                <Target size={20} className="text-[#8b7d6b]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#2d2a26]">My Mission</h3>
            </div>
            <p className="text-[#5c564e] leading-relaxed">
              My mission is to grow into a successful entrepreneur and professional who combines creativity with innovation to make a meaningful impact. I am committed to building my personal brand in fashion design, continuously learning, and developing both my creative and professional skills to deliver unique, well-thought-out results for my clients and community.
            </p>
          </div>

          {/* Interests Section */}
          <div className="bg-white rounded-2xl p-8 border border-[#e8e2d9]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#f5efe6] rounded-lg flex items-center justify-center">
                <Lightbulb size={20} className="text-[#8b7d6b]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#2d2a26]">Interests & Goals</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Scissors size={18} className="text-[#b89f7a] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#2d2a26] text-sm">Fashion Design</p>
                  <p className="text-[#7a746d] text-xs mt-1">Creating unique clothing pieces and building a personal fashion brand.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Palette size={18} className="text-[#b89f7a] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#2d2a26] text-sm">Creative Work</p>
                  <p className="text-[#7a746d] text-xs mt-1">Exploring innovative ideas and bringing creative visions to life.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={18} className="text-[#b89f7a] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#2d2a26] text-sm">Entrepreneurship</p>
                  <p className="text-[#7a746d] text-xs mt-1">Building a business that combines creativity with professional excellence.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="text-[#b89f7a] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#2d2a26] text-sm">Continuous Learning</p>
                  <p className="text-[#7a746d] text-xs mt-1">Developing digital and professional skills through programs like ALX.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
