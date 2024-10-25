
import type { ModelRef } from 'vue'
import { gamesData } from '~/data/data'

export const useGamePlayerFilter = (model:ModelRef<Array<any>>) => {
  const operators: Array<string> = [
    ...new Set(gamesData.map((game) => game?.operator))
  ]
  const gameTypes: Ref<Array<string>> = ref([])
  const operatorNames: Ref<Array<string>> = ref([])
  const slatePlayers: Ref<Array<string>> = ref([])
  const selectedOperator: Ref<string | null> = ref(null)
  const selectedGame: Ref<string | null> = ref(null)

  const handleOperator = (event: string) => {
    gameTypes.value = [
      ...new Set(
        gamesData
          ?.filter((game) => game.operator == event)
          ?.map((game) => game.operatorGameType)
      ),
    ]
  }

  const handleGameType = (event: string) => {
    operatorNames.value = [
      ...new Set(
        gamesData
          ?.filter((game) => game.operatorGameType == event)
          ?.map((game) => game.operatorName)
      ),
    ]?.flat()
  }

  const handleOperatorName = (event: string) => {
    model.value = [
      ...new Set(
        gamesData
          ?.filter((game) => game.operatorName == event)
          ?.map((game) => game.dfsSlatePlayers)
      ),
    ]?.flat()
  }

  return {
    operators,
    gameTypes,
    slatePlayers,
    selectedOperator,
    selectedGame,
    operatorNames,
    handleOperator,
    handleGameType,
    handleOperatorName,
  }
}
