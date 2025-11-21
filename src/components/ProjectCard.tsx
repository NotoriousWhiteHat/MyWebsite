import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

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
    <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        <div className="flex gap-4 mb-4 text-sm">
          <div>
            <span className="font-semibold">{visits}</span>
            <span className="text-muted-foreground"> visits</span>
          </div>
          <div>
            <span className="font-semibold">{ccu}</span>
            <span className="text-muted-foreground"> CCU</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{role}</p>
        <div className="flex gap-2 mt-auto">
          <Button asChild variant="secondary" size="sm">
            <a href={gameLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Game
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href={groupLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Group
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
