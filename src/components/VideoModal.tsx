import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}

const VideoModal = ({ isOpen, onClose, videoId, title }: VideoModalProps) => {
  if (!isOpen) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-surface border border-border">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-text-primary hover:text-accent transition-colors"
        >
          <X size={24} />
        </button>
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;