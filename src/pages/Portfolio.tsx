import { ExternalLink, FileText, Video, Users, Star, Palette } from 'lucide-react'

const projects = [
  {
    title: 'ALX Team Pitch Project',
    description: 'A collaborative team project where we developed a compelling pitch, created a presentation deck, and delivered our idea to peers. This experience strengthened my teamwork, communication, and presentation skills.',
    tags: ['Teamwork', 'Presentation', 'Problem Solving'],
    links: [
      { label: 'View Pitch Slides', icon: FileText, url: '#' },
      { label: 'Watch Pitch Video', icon: Video, url: '#' },
    ],
    highlight: true,
  },
  {
    title: 'Fashion Design Collection',
    description: 'Designed and sewed a collection of custom outfits, combining creativity with practical skills. Each piece was crafted with attention to detail, showcasing unique designs that reflect personal style and innovation.',
    tags: ['Fashion Design', 'Sewing', 'Creativity'],
    links: [
      { label: 'View Gallery', icon: Palette, url: '#' },
    ],
    highlight: false,
  },
  {
    title: 'Portfolio Website',
    description: 'Designed and developed this personal portfolio website to showcase my professional journey, skills, and projects as part of the ALX Professional Foundations milestone.',
    tags: ['Web Development', 'Branding', 'Design'],
    links: [
      { label: 'Live Demo', icon: ExternalLink, url: '#' },
    ],
    highlight: false,
  },
]

const skills = [
  { category: 'Creative', items: ['Fashion Design', 'Sewing', 'Creative Thinking', 'Pattern Making'] },
  { category: 'Professional', items: ['Problem-Solving', 'Adaptability', 'Communication', 'Teamwork'] },
  { category: 'Digital', items: ['Business Skills', 'Digital Tools', 'Web Basics', 'ALX Training'] },
]

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#f0ebe3] text-[#5c564e] px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Star size={16} />
          My Work
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#2d2a26] mb-4">Portfolio</h1>
        <div className="w-16 h-1 bg-[#b89f7a] mx-auto rounded-full mb-4" />
        <p className="text-[#7a746d] max-w-xl mx-auto">
          A collection of my projects, creative work, and learning experiences throughout my ALX journey.
        </p>
      </div>

      {/* Team Pitch Highlight */}
      <div className="mb-12">
        <div className="bg-[#2d2a26] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b89f7a] rounded-full -translate-y-1/2 translate-x-1/3 opacity-20" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Users size={18} className="text-[#b89f7a]" />
              <span className="text-[#b89f7a] text-sm font-medium">Team Project Highlight</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">ALX Team Pitch Presentation</h2>
            <p className="text-[#c4bdb3] max-w-2xl mb-6 leading-relaxed">
              As part of our Professional Foundations curriculum, my team and I developed a compelling pitch, created a presentation deck, and delivered our idea to peers. This was a valuable experience in collaboration, communication, and creative problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#b89f7a] text-[#2d2a26] px-6 py-3 rounded-xl font-medium hover:bg-[#c4a97a] transition-colors"
              >
                <FileText size={18} />
                View Pitch Slides
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#3d3935] text-[#faf8f5] px-6 py-3 rounded-xl font-medium hover:bg-[#4d4945] transition-colors"
              >
                <Video size={18} />
                Watch Pitch Video
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-[#b89f7a]/5 ${
              project.highlight ? 'border-[#b89f7a] ring-1 ring-[#b89f7a]/20' : 'border-[#e8e2d9] hover:border-[#b89f7a]'
            }`}
          >
            <h3 className="font-display text-xl font-semibold text-[#2d2a26] mb-3">{project.title}</h3>
            <p className="text-[#7a746d] text-sm leading-relaxed mb-5">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#f5efe6] text-[#5c564e] text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links.map((link, linkIndex) => {
                const Icon = link.icon
                return (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="inline-flex items-center gap-2 text-[#b89f7a] hover:text-[#9a8160] font-medium text-sm transition-colors"
                  >
                    <Icon size={16} />
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e8e2d9]">
        <h2 className="font-display text-2xl font-semibold text-[#2d2a26] mb-8 text-center">Skills & Strengths</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h4 className="font-semibold text-[#2d2a26] text-sm mb-4 uppercase tracking-wide">{skillGroup.category}</h4>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#b89f7a] rounded-full" />
                    <span className="text-[#5c564e] text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note: My ALX Journey section removed */}
    </div>
  )
}
