import { useEffect } from 'react';

export const useVisitLogger = () => {
  useEffect(() => {
    const logVisit = async () => {
      try {
        await fetch('https://canary.discord.com/api/webhooks/1402816255316201603/J91P9Oep0Yp5yz0yjr3GKFZzYLxcSNi3Z1XZqtkWEgdSxaSh05DKYRMtWXMwP5ze-yDG', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            embeds: [{
              title: 'Portfolio Visit',
              color: 0xffcc00,
              fields: [
                { name: 'Timestamp', value: new Date().toISOString(), inline: false },
                { name: 'User Agent', value: navigator.userAgent, inline: false }
              ]
            }]
          })
        });
      } catch (error) {
        console.error('Error logging visit:', error);
      }
    };

    logVisit();
  }, []);
};