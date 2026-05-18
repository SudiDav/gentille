import { Mic, Video, Clock, Calendar, Sparkles, AlertCircle } from 'lucide-react'

export default function ElevatorPitch() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#f0ebe3] text-[#5c564e] px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Mic size={16} />
          Video Pitch
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#2d2a26] mb-4">Elevator Pitch</h1>
        <div className="w-16 h-1 bg-[#b89f7a] mx-auto rounded-full" />
      </div>

      {/* Video Pitch */}
      <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e8e2d9] mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#f5efe6] rounded-lg flex items-center justify-center">
            <Video size={20} className="text-[#8b7d6b]" />
          </div>
          <h2 className="font-display text-xl font-semibold text-[#2d2a26]">My Elevator Pitch Video</h2>
        </div>

        {/* Local Video Player */}
        <div className="w-full rounded-xl overflow-hidden border border-[#e8e2d9] shadow-lg mb-6 bg-[#2d2a26]">
          <video
            className="w-full aspect-video"
            controls
            poster="/gentille.jpeg"
            preload="metadata"
          >
            <source src="/videos/elevator-pitch.mp4" type="video/mp4" />
            <source src="/videos/elevator-pitch.webm" type="video/webm" />
            <p className="text-[#c4bdb3] text-center py-8">
              Your browser does not support the video tag.
            </p>
          </video>
        </div>


      </div>

      {/* Pitch Preview */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Written Pitch */}
        <div className="bg-white rounded-2xl p-8 border border-[#e8e2d9]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#f5efe6] rounded-lg flex items-center justify-center">
              <Mic size={20} className="text-[#8b7d6b]" />
            </div>
            <h3 className="font-display text-lg font-semibold text-[#2d2a26]">My Written Pitch</h3>
          </div>
          <div className="bg-[#faf8f5] rounded-xl p-5 border border-[#e8e2d9]">
            <p className="text-[#5c564e] leading-relaxed italic text-sm">
              "My name is UMUHOZAWASE Gentille, and I am a motivated learner building skills in technology and personal development. I have experience in creative work, including fashion design and sewing, and I am currently developing my digital and professional skills through my studies. I am skilled in creativity, problem-solving, and adaptability, which allow me to approach challenges with innovative and practical solutions. What makes me stand out is my willingness to learn, grow, and consistently improve myself in everything I do. I bring value by combining creativity with discipline, helping clients or employers get unique, well-thought-out results while maintaining reliability and consistency. I am currently looking for opportunities to grow, collaborate, or gain experience, so I would appreciate being considered for any relevant opportunities or connections."
            </p>
            <p className="text-[#5c564e] leading-relaxed italic text-sm mt-3 font-medium">
              Thank you for your time.
            </p>
          </div>
        </div>

        {/* Pitch Structure */}
        <div className="bg-white rounded-2xl p-8 border border-[#e8e2d9]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#f5efe6] rounded-lg flex items-center justify-center">
              <Sparkles size={20} className="text-[#8b7d6b]" />
            </div>
            <h3 className="font-display text-lg font-semibold text-[#2d2a26]">Pitch Structure</h3>
          </div>
          <div className="space-y-4">
            {[
              { icon: Clock, label: 'Introduction', desc: 'Name & current role' },
              { icon: Sparkles, label: 'Value Proposition', desc: 'Skills & what makes me unique' },
              { icon: Mic, label: 'Call to Action', desc: 'Seeking opportunities & connection' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#f5efe6] rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#8b7d6b]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2d2a26] text-sm">{item.label}</p>
                    <p className="text-[#7a746d] text-xs">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tips Card */}
      <div className="bg-[#2d2a26] rounded-2xl p-8 md:p-10 text-white">
        <h3 className="font-display text-xl font-semibold mb-6 text-center">Why an Elevator Pitch Matters</h3>
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 bg-[#3d3935] rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock size={20} className="text-[#b89f7a]" />
            </div>
            <p className="font-medium text-sm mb-2">First Impressions</p>
            <p className="text-[#9a9389] text-xs">You have 30-60 seconds to make a memorable impact.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-[#3d3935] rounded-full flex items-center justify-center mx-auto mb-3">
              <Mic size={20} className="text-[#b89f7a]" />
            </div>
            <p className="font-medium text-sm mb-2">Clarity</p>
            <p className="text-[#9a9389] text-xs">Practice articulating who you are and what you want clearly.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-[#3d3935] rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar size={20} className="text-[#b89f7a]" />
            </div>
            <p className="font-medium text-sm mb-2">Opportunity</p>
            <p className="text-[#9a9389] text-xs">Be ready when networking opportunities arise at any moment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
