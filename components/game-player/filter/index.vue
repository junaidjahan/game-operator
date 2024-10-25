<template>
    <div>
        <BaseCard class=" py-9" rounded="lg">
            <v-row no-gutters>
                <v-col cols="12" sm="4">
                    <div class="ml-8">
                        <BaseSelect v-model="selectedOperator" :items="operators" placeholder="Select Operator"
                            @update:modelValue="handleOperator" />
                    </div>
                </v-col>
                <v-col cols="12" sm="4">
                    <div class="ml-8">
                        <BaseSelect v-model="selectedGame" :items="gameTypes" placeholder="Select Game Type"
                            @update:modelValue="handleGameType" />
                    </div>
                </v-col>
                <v-col cols="12" sm="4">
                    <div class="mx-8">
                        <BaseSelect :items="operatorNames" item-title="operatorPlayerName"
                            placeholder="Select Slate Name" @update:modelValue="handleOperatorName" />
                    </div>
                </v-col>
            </v-row>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">

import gamesData from "@/data/data.js"

const model = defineModel()

const operators: Array<string> = [...new Set(gamesData.map(game => game?.operator))]
const gameTypes: Ref<Array<string>> = ref([])
const operatorNames: Ref<Array<string>> = ref([])
const slatePlayers: Ref<Array<string>> = ref([])
const selectedOperator: Ref<string | null> = ref(null)
const selectedGame: Ref<string | null> = ref(null)

const handleOperator = (event: string) => {
    gameTypes.value = [...new Set(gamesData?.filter(game => game.operator == event)?.map(game => game.operatorGameType))]
}

const handleGameType = (event: string) => {
    operatorNames.value = [...new Set(gamesData?.filter(game => game.operatorGameType == event)?.map(game => game.operatorName))]?.flat()
}

const handleOperatorName = (event: string) => {
    model.value = [...new Set(gamesData?.filter(game => game.operatorName == event)?.map(game => game.dfsSlatePlayers))]?.flat()
}

</script>

<style lang="scss" scoped></style>