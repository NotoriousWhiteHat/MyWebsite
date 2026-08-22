import type { Handler } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

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
  9619579678,  // Climb Staircase For Brainrots
  9722798126, // Survive Lava for Anime Fruits
  9684648839, // escape maze
  9762224678, // 1+ speed dragon
  9931749389, // dqr
  197306872,  // The Robine
  848145103,  // DQ
  10278375047, // TNT Sandbox
];

// Roblox profile shown on the About section
const ROBLOX_USER_ID = 37294166;

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
  9400,  // Climb Staircase For Brainrots
  11600, // Survive Lava for anime fruits
  12175, // escape maze
  3300, // speed dragon
  13000, // dqr
  60000, // DQ
  7400, // TNT Sandbox
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

    // Per-game live stats, keyed by universe id (as a string)
    const games: Record<string, { playing: number; visits: number }> = {};
    for (const game of gamesData.data || []) {
      games[String(game.id)] = {
        playing: game.playing || 0,
        visits: game.visits || 0,
      };
    }

    // Self-updating peak CCU: whenever a game's live players beat the stored
    // record, log the new record. Persisted in Netlify Blobs, so it ratchets
    // up over time and is shared across all visitors. Best-effort.
    let peaks: Record<string, number> = {};
    try {
      const store = getStore('roblox-peaks');
      peaks = (await store.get('peaks', { type: 'json' })) || {};
      let changed = false;
      for (const [id, g] of Object.entries(games)) {
        const prev = peaks[id] || 0;
        if (g.playing > prev) {
          peaks[id] = g.playing;
          changed = true;
        }
      }
      if (changed) {
        await store.setJSON('peaks', peaks);
      }
    } catch (peaksError) {
      console.error('Error updating peak CCU store:', peaksError);
    }

    // Calculate totals
    const totalCCU = gamesData.data?.reduce((sum: number, game: any) => sum + (game.playing || 0), 0) || 0;
    const totalVisits = gamesData.data?.reduce((sum: number, game: any) => sum + (game.visits || 0), 0) || 0;
    const totalPeakCCU = PEAK_CCU_VALUES.reduce((sum, ccu) => sum + ccu, 0);

    // Fetch live Roblox profile (followers / friends / avatar). Best-effort.
    let profile: {
      followers: number;
      friends: number;
      following: number;
      avatarUrl: string | null;
    } | null = null;
    try {
      const [followersRes, friendsRes, followingRes, thumbRes] = await Promise.all([
        fetch(`https://friends.roblox.com/v1/users/${ROBLOX_USER_ID}/followers/count`),
        fetch(`https://friends.roblox.com/v1/users/${ROBLOX_USER_ID}/friends/count`),
        fetch(`https://friends.roblox.com/v1/users/${ROBLOX_USER_ID}/followings/count`),
        fetch(
          `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${ROBLOX_USER_ID}&size=420x420&format=Png&isCircular=false`
        ),
      ]);
      const thumb = await thumbRes.json();
      profile = {
        followers: (await followersRes.json())?.count ?? 0,
        friends: (await friendsRes.json())?.count ?? 0,
        following: (await followingRes.json())?.count ?? 0,
        avatarUrl: thumb?.data?.[0]?.imageUrl ?? null,
      };
    } catch (profileError) {
      console.error('Error fetching Roblox profile:', profileError);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        games,
        peaks,
        profile,
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
