export type Slate = {
  _id: string
  season: number
  seasonType: number
  slateId: number
  week: number
  _lastUpdatedData: string
  dfsSlateGames: any
  dfsSlatePlayers: Array<SlatePlayer>
  isMultiDaySlate: boolean
  numberOfGames: number
  operator: string
  operatorDay: string
  operatorGameType: string
  operatorName: string
  operatorSlateId: number
  operatorStartTime: string
  removedByOperator: string
  salaryCap: number
  slateRosterSlots: any
  id: string
}

export type SlatePlayer = {
  slatePlayerId: number
  slateId: number
  slateGameId: number
  playerId: number
  playerGameProjectionStatId: number
  fantasyDefenseProjectionStatId: number
  operatorPlayerId: string
  operatorSlatePlayerId: string
  operatorPlayerName: string
  operatorPosition: string
  operatorSalary: number
  team: string
  teamId: number
  removedByOperator: boolean
  operatorRosterSlots: any
  fantasyPoints: number
  fantasyPointsPerDollar: number
}
