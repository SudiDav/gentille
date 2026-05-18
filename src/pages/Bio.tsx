import { MapPin, GraduationCap, Target, Heart, Scissors, Globe, Lightbulb, Palette, Mail, Phone } from 'lucide-react'

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
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-2 border-[#e8e2d9]">
              <img
                src="/gentille.jpeg"
                alt="Gentille Umuhozawase"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="font-display text-2xl font-semibold text-[#2d2a26] text-center mb-2">Gentille UMUHOZAWASE</h2>
            <p className="text-[#7a746d] text-center text-sm mb-6">Aspiring Fashion Designer & Data Analytics Professional</p>

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
                <span>Fashion Design & Data Analytics</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#5c564e]">
                <Mail size={16} className="text-[#b89f7a]" />
                <a href="mailto:umuhozawasegentille@gmail.com" className="hover:text-[#b89f7a] transition-colors">
                  umuhozawasegentille@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#5c564e]">
                <Phone size={16} className="text-[#b89f7a]" />
                <a href="tel:+250788207729" className="hover:text-[#b89f7a] transition-colors">
                  +250 788 207 729
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#e8e2d9]">
              <h4 className="font-semibold text-[#2d2a26] text-sm mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Creativity', 'Analytical Thinking', 'Adaptability', 'Fashion Design', 'SQL', 'Data Visualization', 'Excel'].map((skill) => (
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
                My name is Gentille Umuhozawase. I am an aspiring fashion designer and future data analytics professional passionate about combining creativity with technology. I believe data can play an important role in the fashion industry by helping designers understand customer preferences, predict trends, and make smarter business decisions for their brands.
              </p>
              <p>
                Currently, I am building skills in Data Analytics through professional foundation studies at ALX Rwanda while continuing to grow my passion for fashion and creative design. I am learning tools such as Excel, SQL, and data visualization to better understand patterns, trends, and consumer behavior.
              </p>
              <p>
                What makes me unique is my ability to combine creativity, curiosity, and analytical thinking.
              </p>
              <p>
                My goal is to use both fashion design and data analytics skills to create innovative designs, build stronger brands, and contribute to the future of the fashion industry.
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
              My mission is to grow into a successful professional who combines fashion design with data analytics to make a meaningful impact. I am committed to building my personal brand, continuously learning, and developing both my creative and analytical skills to deliver innovative, well-thought-out results for my clients and community.
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
