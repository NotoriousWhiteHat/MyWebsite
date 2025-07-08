
import React, { useEffect, useRef } from 'react';

export const SoundManager = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize Web Audio API
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };

    // Create beep sound
    const createBeep = (frequency: number, duration: number, volume: number = 0.1) => {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, audioContextRef.current.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + duration);

      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + duration);
    };

    // Add sound effects to interactive elements
    const addSoundEffects = () => {
      initAudio();

      // Add hover sounds to buttons and links
      const interactiveElements = document.querySelectorAll('button, a, .game-card, .skill-category, .contact-link');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          createBeep(800, 0.1, 0.02);
        });

        element.addEventListener('click', () => {
          createBeep(1200, 0.15, 0.03);
        });
      });
    };

    // Delayed initialization to avoid autoplay restrictions
    const timer = setTimeout(addSoundEffects, 2000);

    return () => {
      clearTimeout(timer);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return null;
};
