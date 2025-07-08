import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Eye, ThumbsUp, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "JEWELRY HEIST",
      subtitle: "Project Realism", 
      description: "A high-stakes heist game featuring realistic mechanics and immersive gameplay. Currently active in anti-cheat development, exploit research, backend systems, and project management.",
      image: "https://i.imgur.com/zEbgoMY.png",
      link: "https://www.roblox.com/games/509062192/JEWELRY-HEIST-Project-Realism",
      groupLink: "https://www.roblox.com/communities/2808906/The-Robine#!/about",
      stats: {
        visits: "18.4M",
        rating: "63%",
        ccu: "~500"
      },
      role: "Lead Developer",
      technologies: ["Lua", "Roblox Studio", "Anti-Cheat", "Backend Systems", "Project Management"],
      status: "Currently Active"
    },
    {
      title: "DUNGEON QUEST",
      subtitle: "Vulnerability Research",
      description: "Conducted comprehensive vulnerability research and exploit analysis for one of Roblox's most popular RPG games. Identified critical security flaws and provided detailed reports.",
      image: "https://i.imgur.com/qsBEQ14.png",
      link: "https://www.roblox.com/games/2414851778/Dungeon-Quest-RPG-Adventure",
      groupLink: "https://www.roblox.com/communities/4788489/Dungeon-Quest-by-Voldex#!/about",
      stats: {
        visits: "2.2B",
        rating: "91%",
        ccu: "2K"
      },
      role: "Vulnerability Researcher",
      technologies: ["Exploit Research", "Reverse Engineering", "Lua", "Security Analysis"],
      status: "Pro Bono Work"
    },
    {
      title: "ARCANE CONQUEST",
      subtitle: "ABYSS COSMETICS",
      description: "Fantasy RPG with advanced cosmetic systems and player progression. Contributed to backend development and conducted security testing through exploit research.",
      image: "https://i.imgur.com/jUKGCfs.png",
      link: "https://www.roblox.com/games/125503319883299/ABYSS-COSMETICS-Arcane-Conquest",
      groupLink: "https://www.roblox.com/communities/14436378/Arcane-Conquest#!/about",
      stats: {
        visits: "6.8M",
        rating: "85%",
        ccu: "~300"
      },
      role: "Backend Developer & Security Analyst",
      technologies: ["Lua", "Backend Development", "Exploit Research", "Security Testing"],
      status: "Past Project"
    },
    {
      title: "CRUSADERS RPG",
      subtitle: "TOWER Defense",
      description: "Strategic tower defense RPG with complex upgrade systems. Conducted security testing and vulnerability research to help strengthen the game's defenses.",
      image: "https://i.imgur.com/HSyaRx5.png",
      link: "https://www.roblox.com/games/13076677555/TOWER-Crusaders-RPG",
      groupLink: "https://www.roblox.com/communities/13221283/Crusaders-AS#!/about",
      stats: {
        visits: "1.9M",
        rating: "87%",
        ccu: "~200"
      },
      role: "Security Analyst",
      technologies: ["Lua", "Exploit Research", "Security Testing", "Vulnerability Assessment"],
      status: "Past Project"
    }
  ];

  const additionalGroups = [
    {
      name: "Robine Deathwatch",
      description: "Roblox Clanning Community",
      link: "https://www.roblox.com/communities/2896860/Robine-Deathwatch#!/about",
      role: "Lead Programmer"
    },
    {
      name: "TR HELlX",
      description: "Tactical Realism Community",
      link: "https://www.roblox.com/communities/10109929/TR-HELlX#!/about",
      role: "Developer"
    },
    {
      name: "TR Intercept Squadron",
      description: "Military Simulation Group",
      link: "https://www.roblox.com/communities/10104161/TR-lntercept-Squadron#!/about",
      role: "Programmer"
    },
    {
      name: "Altera Enterprises",
      description: "Corporate Roleplay Community",
      link: "https://www.roblox.com/communities/672481552/Altera-Enterprises#!/about",
      role: "Systems Developer"
    },
    {
      name: "Aerakos",
      description: "Strategic Gaming Community",
      link: "https://www.roblox.com/communities/600385360/Aerakos#!/about",
      role: "Lead Programmer"
    },
    {
      name: "TR Sentinels",
      description: "Elite Tactical Unit",
      link: "https://www.roblox.com/communities/5163623/TR-Sentinels#!/about",
      role: "Anti-Cheat Developer"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold glow-text mb-6">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase of games and applications I've developed, reaching billions of users 
              and pushing the boundaries of what's possible in interactive entertainment.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg border border-border group-hover:glow-border transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold glow-text mb-2">{project.title}</h3>
                    <p className="text-lg text-primary mb-2">{project.subtitle}</p>
                    <div className="flex gap-2 mb-2">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm border border-secondary/30">
                        {project.role}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm border ${
                        project.status === "Currently Active" 
                          ? "bg-green-500/20 text-green-500 border-green-500/30" 
                          : "bg-muted/20 text-muted-foreground border-muted/30"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-card border border-border rounded-lg">
                      <Eye className="mx-auto mb-1 text-primary" size={20} />
                      <div className="font-bold text-primary">{project.stats.visits}</div>
                      <div className="text-xs text-muted-foreground">Visits</div>
                    </div>
                    <div className="text-center p-3 bg-card border border-border rounded-lg">
                      <ThumbsUp className="mx-auto mb-1 text-green-500" size={20} />
                      <div className="font-bold text-green-500">{project.stats.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center p-3 bg-card border border-border rounded-lg">
                      <Users className="mx-auto mb-1 text-blue-500" size={20} />
                      <div className="font-bold text-blue-500">{project.stats.ccu}</div>
                      <div className="text-xs text-muted-foreground">Peak CCU</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button asChild className="glow-border">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Play Game <ExternalLink className="ml-2" size={16} />
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a 
                        href={project.groupLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Group
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Groups */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 glow-text">Additional Communities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalGroups.map((group, index) => (
                <div 
                  key={group.name}
                  className="bg-card border border-border rounded-lg p-6 hover:glow-border transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                  <p className="text-muted-foreground mb-4">{group.description}</p>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm border border-secondary/30 mb-4 inline-block">
                    {group.role}
                  </span>
                  <div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a 
                        href={group.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Community <ExternalLink className="ml-2" size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Summary */}
          <div className="mt-20 bg-card/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 glow-text">Impact & Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <Star className="mx-auto mb-2 text-yellow-500" size={32} />
                <div className="text-2xl font-bold text-yellow-500">2.2B+</div>
                <div className="text-muted-foreground">Total Visits</div>
              </div>
              <div>
                <Users className="mx-auto mb-2 text-blue-500" size={32} />
                <div className="text-2xl font-bold text-blue-500">50M+</div>
                <div className="text-muted-foreground">Players Reached</div>
              </div>
              <div>
                <ThumbsUp className="mx-auto mb-2 text-green-500" size={32} />
                <div className="text-2xl font-bold text-green-500">85%+</div>
                <div className="text-muted-foreground">Avg Rating</div>
              </div>
              <div>
                <ExternalLink className="mx-auto mb-2 text-primary" size={32} />
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
