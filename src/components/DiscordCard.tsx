import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, ExternalLink } from "lucide-react";

const DiscordCard = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const copyDiscordId = () => {
    navigator.clipboard.writeText("959238547133595648");
    // You could add a toast notification here
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isExpanded ? (
        <Button
          onClick={() => setIsExpanded(true)}
          className="rounded-full w-14 h-14 bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-lg animate-pulse-glow"
        >
          <MessageCircle size={24} />
        </Button>
      ) : (
        <div className="bg-card border border-border rounded-lg p-4 shadow-xl glow-border animate-slide-in-right max-w-xs">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm">Contact Me</h3>
            <Button
              variant="ghost" 
              size="icon"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6"
            >
              <X size={16} />
            </Button>
          </div>
          
          <div className="flex items-center space-x-3 mb-3">
            <img 
              src="https://i.imgur.com/Rm1WOE4.jpeg"
              alt="Notorious Discord Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold text-sm">Notorious</div>
              <div className="text-xs text-muted-foreground">Developer</div>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              onClick={copyDiscordId}
              variant="outline"
              size="sm"
              className="w-full justify-start text-xs"
            >
              <MessageCircle size={14} className="mr-2" />
              Copy Discord ID
            </Button>
            
            <div className="grid grid-cols-2 gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="text-xs"
              >
                <a 
                  href="https://www.roblox.com/users/37294166/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={12} className="mr-1" />
                  Roblox
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="sm"
                className="text-xs"
              >
                <a 
                  href="https://open.spotify.com/user/853y7u5be5lg8sewleuplhkjx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={12} className="mr-1" />
                  Spotify
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscordCard;
