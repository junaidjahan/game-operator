<template>
    <div class="game-player-container">
        <CoreNavbar />
        <div class="inner-container">
            <div class="filter">
                <GamePlayerFilter v-model="players" @update:model-value="selectedRow = players?.[0]!" />
            </div>
            <v-row class="mt-14">
                <v-col cols="8">
                    <div class="pl-8">
                        <BaseTable v-model="selectedRow" :headers :rows="players!" @row-click="selectedRow = $event">
                            <template #operatorSalary="{ row, col }">
                                <p class="pt-4">
                                    ${{ row[col] }}
                                </p>
                            </template>
                        </BaseTable>
                    </div>
                </v-col>
                <v-col cols="4" class="pr-10" v-if="selectedRow">
                    <GamePlayerPlayerCard :player="selectedRow" />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SlatePlayer } from '~/types/slate.types';


const players: Ref<Array<SlatePlayer>> = ref([])
const selectedRow: Ref<SlatePlayer | null> = ref(null)
const headers = [
    {
        title: 'Name',
        value: 'operatorPlayerName'
    },
    {
        title: 'Team',
        value: 'team'
    },
    {
        title: 'Position',
        value: 'operatorPosition'
    },
    {
        title: 'Salary',
        value: 'operatorSalary'
    },
    {
        title: 'Points',
        value: 'fantasyPoints'
    },
]


</script>

<style lang="scss" scoped>
.game-player-container {
    height: 100%;

    .inner-container {
        top: 92px;
        position: absolute;
        width: 100%;

        .filter {
            margin-top: 64px;
            max-width: 1010px;
            margin-inline: auto;
        }
    }

}
</style>