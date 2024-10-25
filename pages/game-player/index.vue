<template>
    <div class="game-player-container">
        <CoreNavbar />
        <div class="inner-container">
            <div class="filter">
                <GamePlayerFilter v-model="players" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const players = ref(null)

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