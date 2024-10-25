<template>
    <div>
        <BaseCard class="py-9" rounded="lg">
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
import type { SlatePlayer } from '~/types/slate.types';
import { useGamePlayerFilter } from './useGamePlayerFilter'

const model = defineModel<Array<SlatePlayer>>({ default: null })

const {
    operators,
    gameTypes,
    selectedOperator,
    selectedGame,
    operatorNames,
    handleOperator,
    handleGameType,
    handleOperatorName,
} = useGamePlayerFilter(model)
</script>

<style lang="scss" scoped></style>
