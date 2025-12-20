import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  image: string;
  visits: string;
  ccu: string;
  role: string;
  gameLink: string;
  groupLink: string;
}

const ProjectCard = ({ title, image, visits, ccu, role, gameLink, groupLink }: ProjectCardProps) => {
  return (
    <a 
      href={gameLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card border border-border rounded-xl overflow-hidden 
                 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-200 
                 cursor-pointer h-full"
      style={{ textDecoration: 'none' }}
    >
      {/* Image Section */}
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 
                     group-hover:scale-[1.02]"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1.5">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {role}
            </p>
          </div>
          
          <div className="text-muted-foreground group-hover:text-foreground 
                         transition-all duration-200 ml-3 mt-0.5
                         group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={20} strokeWidth={2} />
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex gap-10 mt-6 pt-5 border-t border-border">
          <div>
            <p className="text-[28px] font-bold text-foreground tabular-nums tracking-tight">
              {visits}
            </p>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
              Visits
            </p>
          </div>
          
          <div>
            <p className="text-[28px] font-bold text-foreground tabular-nums tracking-tight">
              {ccu}
            </p>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
              Peak CCU
            </p>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3 mt-6 pt-5 border-t border-border">
          <button 
            className="bg-foreground text-background px-4 py-2 rounded-lg text-sm 
                       font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 
                       transition-all duration-200 active:scale-[0.98]"
            onClick={(e) => {
              e.preventDefault();
              window.open(gameLink, '_blank');
            }}
          >
            View Project
          </button>
          
          <button 
            className="bg-transparent text-muted-foreground border border-border px-4 py-2 
                       rounded-lg text-sm font-medium hover:border-zinc-700 hover:text-foreground 
                       hover:bg-muted transition-all duration-200 active:scale-[0.98]"
            onClick={(e) => {
              e.preventDefault();
              window.open(groupLink, '_blank');
            }}
          >
            Group
          </button>
        </div>
        
      </div>
    </a>
  );
};

export default ProjectCard;
