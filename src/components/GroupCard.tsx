interface GroupCardProps {
  name: string;
  icon: string;
  link: string;
  role: string;
}

const GroupCard = ({ name, icon, link, role }: GroupCardProps) => {
  return (
    <div className="sharp-card p-4 hover:lamp-glow transition-all duration-300">
      <div className="flex items-center space-x-4">
        <img 
          src={icon} 
          alt={`${name} icon`}
          className="w-12 h-12 object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-mono font-bold text-text-primary mb-1">
            {name}
          </h3>
          <p className="text-text-secondary font-mono text-sm mb-2">
            {role}
          </p>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="sharp-button px-3 py-1 text-xs font-mono uppercase tracking-wider"
          >
            View Group
          </a>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;