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

// Group IDs extracted from your portfolio
const GROUP_IDS = [
  5142143,    // A-S-c (Mini Golf)
  675364330,  // Muscle Rabbit Studio (Climb and ZIP)
  32461765,   // Casix Interactive (Super Soldiers)
  32062143,   // High Table Studio (Lone Survival)
  5855434,    // CBRN (Virus Border)
  503910868,  // Chefs Special Games (Shoot a Brainrot)
  699920026,  // Blind Shot Group
  13426157,   // Half Life World
  934390337,  // Dig A Tunnel Studios (Don't Get Crushed)
  9255939,    // Type Productions (Lost Front)
  1053386149, // Bye Bye Games (Slap Duels)
  6264771,    // Emote Clan (Emote RNG)
  14436378,   // Arcane Conquest
  35952306,   // The Mexican Border RP
  2808906,    // The Robine
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

    // Fetch group member counts (in parallel)
    const groupPromises = GROUP_IDS.map(async (groupId) => {
      try {
        const response = await fetch(`https://groups.roblox.com/v1/groups/${groupId}`);
        const data = await response.json();
        return data.memberCount || 0;
      } catch {
        return 0;
      }
    });
    const groupMemberCounts = await Promise.all(groupPromises);

    // Calculate totals
    const totalCCU = gamesData.data?.reduce((sum: number, game: any) => sum + (game.playing || 0), 0) || 0;
    const totalVisits = gamesData.data?.reduce((sum: number, game: any) => sum + (game.visits || 0), 0) || 0;
    const totalMembers = groupMemberCounts.reduce((sum, count) => sum + count, 0);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        currentlyPlaying: totalCCU,
        playSessions: totalVisits,
        communityReach: totalMembers,
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