<template>
    <v-row class="table-pagination">
        <v-col cols="12" sm="3">
            <div class="page-container ">
                Page
                <BaseSelect v-model="page" density="compact" max-width="84" :items="pages" />
            </div>
        </v-col>
        <v-col cols="12" sm="4">
            <div class="page-container ">
                Rows per page
                <BaseSelect v-model="rowsPerPage" density="compact" max-width="100" :items="rowsPerPageData" />
            </div>
        </v-col>
        <v-col cols="12" sm="3">
            <div class="page-container pl-16">
                {{ start >= 1 ? start : 1 }} - {{ end }} of {{ totalRecords }}
            </div>
        </v-col>
        <v-col cols="12" sm="2">
            <v-icon size="30" @click="page -= 1">
                mdi-chevron-left
            </v-icon>
            <v-icon size="30" @click="page += 1">
                mdi-chevron-right
            </v-icon>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
interface Props {
    totalPages: number,
    totalRecords: number,
    start: number,
    end: number,
}

const props = defineProps<Props>()

const page = defineModel<number>('page', { default: 1, type: Number })
const rowsPerPage = defineModel('rowsPerPage', { default: 1, type: Number })

const pages = computed(() =>  Array.from({ length: props.totalPages }, (_, i) => i + 1));
const rowsPerPageData = [8, 20, 30, 50]

</script>

<style lang="scss">
.table-pagination {
    .page-container {
        display: flex;
        column-gap: 8px;
        font-size: 24px;

        .v-field__input {
            font-size: 24px;
            padding-block: 0px;
        }
    }
}
</style>