import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const ContactCard = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className={`sharp-card transition-all duration-300 ${isExpanded ? 'w-80' : 'w-16'}`}>
        {isExpanded ? (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-mono font-bold text-text-primary">Discord</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-text-muted hover:text-accent transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Discord Profile */}
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="https://i.imgur.com/kyMkFv7.jpeg"
                alt="Discord Avatar"
                className="w-16 h-16 object-cover"
              />
              <div>
                <p className="font-mono text-text-primary text-lg">notoriouswhitehat</p>
                <p className="text-sm text-text-muted font-mono">#959238547133595648</p>
                <p className="text-xs text-accent font-mono mt-1">Available for work</p>
              </div>
            </div>
            
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-16 h-16 flex items-center justify-center text-accent hover:text-accent-glow transition-colors"
          >
            <MessageSquare size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactCard;