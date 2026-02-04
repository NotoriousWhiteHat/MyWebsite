import type { Handler } from '@netlify/functions';

// Your Universe IDs
const UNIVERSE_IDS = [
  9046316249,  // Build a Mini Golf
  8606799872,  // Climb and ZIP
  7920020824,  // Super Soldiers
  4712109542,  // Lone Survival
  1668757602,  // Virus Border Roleplay
  8220738785,  // Shoot a Brainrot
  9277195104,  // Blind Shot
  3365197759,  // Half Life City 8
  8620685718,  // Don't Get Crushed By 67
  7935634976,  // The Lost Front
  8080863905,  // Slap Duels
  8313824597,  // Emote RNG
  7093527744,  // Arcane Conquest
  7645013075,  // The Mexican Border
];

// Peak CCU values for each game (from your portfolio)
const PEAK_CCU_VALUES = [
  5600,   // Build a Mini Golf
  4700,   // Climb and ZIP
  4100,   // Super Soldiers
  3000,   // Lone Survival
  2400,   // Virus Border Roleplay
  74700,  // Shoot a Brainrot
  52800,  // Blind Shot
  800,    // Half Life City 8
  47900,  // Don't Get Crushed By 67
  22600,  // The Lost Front
  13600,  // Slap Duels
  7400,   // Emote RNG
  8000,   // Arcane Conquest
  7400,   // The Mexican Border
  800,    // The Robine
];

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  try {
    // Fetch game stats (CCU and visits)
    const gamesResponse = await fetch(
      `https://games.roblox.com/v1/games?universeIds=${UNIVERSE_IDS.join(',')}`
    );
    const gamesData = await gamesResponse.json();

    // Calculate totals
    const totalCCU = gamesData.data?.reduce((sum: number, game: any) => sum + (game.playing || 0), 0) || 0;
    const totalVisits = gamesData.data?.reduce((sum: number, game: any) => sum + (game.visits || 0), 0) || 0;
    const totalPeakCCU = PEAK_CCU_VALUES.reduce((sum, ccu) => sum + ccu, 0);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        currentlyPlaying: totalCCU,
        playSessions: totalVisits,
        peakCCU: totalPeakCCU,
        timestamp: Date.now(),
      }),
    };
  } catch (error) {
    console.error('Error fetching Roblox stats:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch stats' }),
    };
  }
};
