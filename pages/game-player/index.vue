<template>
    <div class="game-player-container">
        <CoreNavbar />
        <div class="inner-container">
            <div class="filter">
                <GamePlayerFilter v-model="players" @update:model-value="selectedRow = players?.[0]!" />
            </div>
            <v-row class="mt-14">
                <v-col cols="8">
                    <div class="px-8">
                        <BaseTable v-model="selectedRow" :headers :rows="players!" @row-click="selectedRow = $event">
                            <template #operatorSalary="{row, col}">
                                <p class="pt-2">
                                    ${{ row[col] }}
                                </p>
                            </template>
                        </BaseTable>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup lang="ts">

const players = ref(null)
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
const selectedRow = ref(null)


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