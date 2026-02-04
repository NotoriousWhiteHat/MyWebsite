// Portfolio games with Universe IDs
// Universe IDs are static and don't change, so we hardcode them to reduce API calls
const PORTFOLIO_GAMES = [
  { placeId: '113508814820816', universeId: 9046316249, groupId: '5142143' },    // Build a Mini Golf
  { placeId: '79605710125811', universeId: 8606799872, groupId: '675364330' },   // Climb And ZIP
  { placeId: '119441025136387', universeId: 7920020824, groupId: '32461765' },   // Super Soldiers
  { placeId: '13559584718', universeId: 4712109542, groupId: '32062143' },       // Lone Survival
  { placeId: '4888877755', universeId: 1668757602, groupId: '5855434' },         // Virus Border Roleplay
  { placeId: '509062192', universeId: 0, groupId: '2808906' },                   // The Robine (Universe ID not provided)
  { placeId: '8906378074', universeId: 3365197759, groupId: '13426157' },        // Half Life: City 8
];

interface GameData {
  id: number;
  playing: number;
  visits: number;
}

interface GroupData {
  memberCount: number;
}

interface PlaceDetails {
  placeId: number;
  universeId: number;
}

// Convert Place IDs to Universe IDs using the multiget-place-details endpoint
export const getUniverseIds = async (placeIds: string[]): Promise<Map<string, number>> => {
  try {
    const url = `https://games.roblox.com/v1/games/multiget-place-details?placeIds=${placeIds.join(',')}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.warn('Failed to fetch universe IDs from place details');
      return new Map();
    }
    
    const data: PlaceDetails[] = await response.json();
    const map = new Map<string, number>();
    
    data.forEach(place => {
      map.set(place.placeId.toString(), place.universeId);
    });
    
    return map;
  } catch (error) {
    console.error('Error fetching universe IDs:', error);
    return new Map();
  }
};

// Fetch game stats (CCU and visits) for multiple universe IDs
export const getGameStats = async (universeIds: number[]): Promise<{ totalCCU: number; totalVisits: number }> => {
  try {
    // Filter out invalid universe IDs (0)
    const validUniverseIds = universeIds.filter(id => id > 0);
    
    if (validUniverseIds.length === 0) {
      console.warn('No valid universe IDs to fetch stats for');
      return { totalCCU: 0, totalVisits: 0 };
    }
    
    const url = `https://games.roblox.com/v1/games?universeIds=${validUniverseIds.join(',')}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.warn('Failed to fetch game stats');
      return { totalCCU: 0, totalVisits: 0 };
    }
    
    const data: { data: GameData[] } = await response.json();
    
    const totalCCU = data.data.reduce((sum, game) => sum + (game.playing || 0), 0);
    const totalVisits = data.data.reduce((sum, game) => sum + (game.visits || 0), 0);
    
    return { totalCCU, totalVisits };
  } catch (error) {
    console.error('Error fetching game stats:', error);
    return { totalCCU: 0, totalVisits: 0 };
  }
};

// Fetch group member count
export const getGroupMembers = async (groupId: string): Promise<number> => {
  try {
    const url = `https://groups.roblox.com/v1/groups/${groupId}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.warn(`Failed to fetch group ${groupId}`);
      return 0;
    }
    
    const data: GroupData = await response.json();
    return data.memberCount || 0;
  } catch (error) {
    console.error(`Error fetching group ${groupId}:`, error);
    return 0;
  }
};

// Fetch all stats at once
export const fetchAllStats = async (): Promise<{
  currentlyPlaying: number;
  playSessions: number;
  communityReach: number;
}> => {
  try {
    // First, try to get universe IDs from place IDs for any that are set to 0
    const placeIdsToFetch = PORTFOLIO_GAMES.filter(game => game.universeId === 0).map(game => game.placeId);
    let universeIdMap = new Map<string, number>();
    
    if (placeIdsToFetch.length > 0) {
      universeIdMap = await getUniverseIds(placeIdsToFetch);
    }
    
    // Build final universe ID list, using fetched IDs or pre-configured ones
    const universeIds = PORTFOLIO_GAMES.map(game => {
      if (game.universeId > 0) {
        return game.universeId;
      }
      return universeIdMap.get(game.placeId) || 0;
    });
    
    // Fetch game stats and group members in parallel
    const [gameStats, ...groupMemberCounts] = await Promise.all([
      getGameStats(universeIds),
      ...PORTFOLIO_GAMES.map(game => getGroupMembers(game.groupId))
    ]);
    
    const communityReach = groupMemberCounts.reduce((sum, count) => sum + count, 0);
    
    return {
      currentlyPlaying: gameStats.totalCCU,
      playSessions: gameStats.totalVisits,
      communityReach,
    };
  } catch (error) {
    console.error('Error fetching all stats:', error);
    return {
      currentlyPlaying: 0,
      playSessions: 0,
      communityReach: 0,
    };
  }
};
