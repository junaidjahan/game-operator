<template>
    <v-select variant="solo" bg-color="black" density="comfortable"  :elevation="0" rounded="lg" hide-details class="base-select">
        <template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]="slotProps">
            <slot :key="index" :name="slot" v-bind="slotProps"></slot>
        </template>
    </v-select>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
// .base-select{
    input::placeholder{
        color: white !important;
        opacity: 1 !important;
    }
// }
</style>