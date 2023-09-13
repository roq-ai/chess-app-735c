const mapping: Record<string, string> = {
  companies: 'company',
  games: 'game',
  'game-administrators': 'game_administrator',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
