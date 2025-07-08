import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Gun System",
      description: "Advanced weapon system with comprehensive weapon handling, recoil patterns, and responsive controls.",
      videoId: "MbpfwToZOiM",
      tech: ["Lua", "Roblox Studio", "Game Mechanics"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Leaderboard UI",
      description: "Clean and functional leaderboard interface with real-time updates and smooth animations. Displays player statistics and rankings effectively.",
      videoId: "aK4Ab0DLiTY", 
      tech: ["Lua", "UI Design", "Roblox Studio"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Loading Screen UI",
      description: "Immersive loading screen with dynamic effects and progress indicators. Creates engaging user experience during game initialization.",
      videoId: "KXiqvCzNZSw",
      tech: ["Lua", "UI/UX Design", "Animation"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold glow-text mb-6">Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical expertise in game development, UI design, 
              and system architecture across various Roblox projects.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card border border-border rounded-lg overflow-hidden hover:glow-border transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Video Embed */}
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} mr-4`}>
                      <Play className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a 
                      href={`https://youtu.be/${item.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Highlight */}
          <div className="mt-20 bg-card/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 glow-text">Core Competencies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Python", "Lua", "Golang", "Java", "HTML/CSS", "Security"].map((skill) => (
                <div 
                  key={skill}
                  className="bg-background border border-border rounded-lg p-4 hover:glow-border transition-all duration-300"
                >
                  <div className="font-semibold text-primary">{skill}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4 glow-text">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always interested in discussing new opportunities and challenging projects.
            </p>
            <Button size="lg" className="glow-border">
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
