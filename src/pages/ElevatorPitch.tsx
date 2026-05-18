import { Mic, Video, Clock, Calendar, Sparkles } from 'lucide-react'

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

      {/* Written Pitch */}
      <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e8e2d9] mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#f5efe6] rounded-lg flex items-center justify-center">
            <Mic size={20} className="text-[#8b7d6b]" />
          </div>
          <h3 className="font-display text-xl font-semibold text-[#2d2a26]">My Written Pitch</h3>
        </div>
        <div className="bg-[#faf8f5] rounded-xl p-6 md:p-8 border border-[#e8e2d9]">
          <p className="text-[#5c564e] leading-relaxed italic">
            "Hello, my name is UMUHOZAWASE Gentille. I'm a fashion designer and future data analyst. I am currently building skills in data analytics to better understand customer behavior, trends, and fashion forecasting. My strengths include creativity, analytical thinking, and problem-solving. What makes me unique is my ability to combine fashion and technology to create smarter and more innovative business decisions. I believe data can help fashion brands predict trends, understand consumers, and grow more successfully. I would be excited to use my skills to help businesses make impactful decisions."
          </p>
          <p className="text-[#5c564e] leading-relaxed italic mt-4 font-medium">
            Thank you.
          </p>
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
