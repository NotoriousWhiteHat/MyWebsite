import { useState } from 'react';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';

interface Video {
  id: string;
  title: string;
  url: string;
}

const VideoGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    { id: 'J6lPpnxZoIE', title: 'Bank System', url: 'https://www.youtube.com/watch?v=J6lPpnxZoIE' },
    { id: 'kEUZulSUdHY', title: 'ATM System', url: 'https://youtu.be/kEUZulSUdHY' },
    { id: '7TpsVYmq4s0', title: 'Gunstore System', url: 'https://www.youtube.com/watch?v=7TpsVYmq4s0' },
    { id: 'FMZg3lzmIUo', title: 'Gun System', url: 'https://youtu.be/FMZg3lzmIUo' },
    { id: '73DbuzoRL0s', title: 'Houses and Storage System', url: 'https://youtu.be/73DbuzoRL0s' },
    { id: 'KXiqvCzNZSw', title: 'Deathwatch Loading Screen', url: 'https://youtu.be/KXiqvCzNZSw' },
    { id: 'aK4Ab0DLiTY', title: 'Aerakos Leaderboard', url: 'https://youtu.be/aK4Ab0DLiTY' },
    { id: 'MbpfwToZOiM', title: 'Aerakos Gun System', url: 'https://youtu.be/MbpfwToZOiM' },
    { id: '03xHcQvMuiU', title: 'Aerakos Website', url: 'https://youtu.be/03xHcQvMuiU' },
  ];

  const getThumbnailUrl = (videoId: string) => 
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div 
            key={video.id}
            className="sharp-card overflow-hidden hover:lamp-glow transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative aspect-video">
              <img 
                src={getThumbnailUrl(video.id)}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-surface/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-accent/80 flex items-center justify-center">
                  <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
                </div>
              </div>
              {/* Snow overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-mono font-bold text-text-primary">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo?.id || ''}
        title={selectedVideo?.title || ''}
      />
    </>
  );
};

export default VideoGrid;