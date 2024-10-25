<template>
    <div class="player-card">
        <div class="player-image">
            <img src="@/assets/images/tom_brady 1.png" alt="" srcset="">
        </div>
        <div class="player-details">
            <h2>
                {{ player?.operatorPlayerName }}
            </h2>
            <h1>
                {{ player?.fantasyPoints }}
            </h1>
            <p>
                Points
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SlatePlayer } from '~/types/slate.types';

interface Props {
    player: SlatePlayer
}

defineProps<Props>()
</script>

<style lang="scss">
@import "@/assets/sass/main.scss";

.player-card {

    .player-image {
        padding-top: 46px;
        background-color: $dark-gray-2;
        width: fit-content;
        border-radius: 8px;
    }

    .player-details{
        background-color: $dark-gray-1;
        max-width: 400px;
        margin-top: -7px;
        padding-top: 20px;
        padding-bottom: 50px;
        border-radius: 8px;
        h2{
            font-size: 32px;
            text-align: center;
            font-weight: normal;
            opacity: 80%;
        }
        h1{
            font-size: 128px;
            font-weight: 400;
            text-align: center;
            opacity: 80%;
        }
        p{
            text-align: center;
        }
    }
}
</style>