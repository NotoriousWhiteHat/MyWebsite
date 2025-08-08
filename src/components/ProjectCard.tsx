interface ProjectCardProps {
  title: string;
  icon: string;
  gameLink: string;
  groupLink: string;
  ccu: string;
  visits: string;
  role: string;
}

const ProjectCard = ({ title, icon, gameLink, groupLink, ccu, visits, role }: ProjectCardProps) => {
  return (
    <div className="sharp-card p-6 hover:lamp-glow transition-all duration-300">
      <div className="flex items-start space-x-4">
        <img 
          src={icon} 
          alt={`${title} icon`}
          className="w-16 h-16 object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-mono font-bold text-text-primary mb-2">
            {title}
          </h3>
          <p className="text-text-secondary font-mono text-sm mb-4">
            {role}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wider">Highest CCU</p>
              <p className="text-accent font-mono font-bold">{ccu}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wider">Visits</p>
              <p className="text-accent font-mono font-bold">{visits}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a 
              href={gameLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sharp-button px-4 py-2 text-sm font-mono uppercase tracking-wider"
            >
              Play Game
            </a>
            <a 
              href={groupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sharp-button px-4 py-2 text-sm font-mono uppercase tracking-wider"
            >
              View Group
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;