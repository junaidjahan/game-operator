<template>
    <v-table density="default" class="base-table rounded-lg">
        <thead>
            <tr>
                <th v-for="(header, index) in headers" :key="index" class="text-left"
                    :style="{ width: header.width ?? '100px' }">
                    {{ header.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="rows" v-for="(item, index) in paginatedData" :key="index"
                :class="{ 'active': JSON.stringify(item) === JSON.stringify(model) }" @click="$emit('row-click', item)">
                <template v-for="(col, colIndex) in headers" :key="colIndex">
                    <slot :name="col.value" :row="item" :col="col.value">
                        <td>
                            {{ item?.[col.value] }}
                        </td>
                    </slot>
                </template>
            </tr>
            <tr v-else>
                <td colspan="10">
                    <p class="px-8 py-3 no-data-text" style="width: 100% !important;">
                        No data!
                    </p>
                </td>
            </tr>
        </tbody>
        <template #bottom>
            <div class="px-8 py-3 pagination rounded-lg">
                <BaseTablePagination v-model:page="page" v-model:rows-per-page="rowsPerPage"
                    :total-records="rows?.length" :total-pages="rows?.length / rowsPerPage" :start="start" :end="rows?.length ? end : 0"
                    @update:page="updateData" @update:rows-per-page="updateData" />
            </div>
        </template>
        <template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]="slotProps">
            <slot :key="index" :name="slot" v-bind="slotProps"></slot>
        </template>
    </v-table>
</template>

<script setup lang="ts">
import type { TableHeader } from './types/table.type';

interface Props {
    headers: Array<TableHeader>,
    rows: Array<any>,
}

const props = defineProps<Props>()

defineEmits(['row-click'])

const model = defineModel()

const page = ref(1)
const rowsPerPage = ref(8)
const paginatedData = ref()
const start = ref(1)
const end = ref(8)

const updateData = () => {
    start.value = (page.value - 1)  * rowsPerPage.value;
    end.value = start.value + rowsPerPage.value;
    paginatedData.value = props.rows?.slice(start.value, end.value);
}

watchEffect(() => {
    paginatedData.value = props.rows?.filter((_, index) => index < rowsPerPage.value)
})

</script>

<style lang="scss">
@import "@/assets/sass/main.scss";

.base-table {
    .v-table__wrapper {
        border-bottom-left-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
    }

    thead {
        background-color: $dark-gray-2;
        font-size: 24px;

        th {
            font-weight: 400 !important;
        }
    }

    tbody {
        tr {
            background-color: $dark-gray-1;
            font-size: 24px;
            cursor: pointer;
        }

        td {
            border: none !important;
        }

        .active {
            background-color: $primary;
        }
    }

    .pagination {
        border-bottom-left-radius: 8px !important;
        border-bottom-right-radius: 8px !important;
    }

    .no-data-text {
        font-size: 24px;
        text-align: center;
        display: flex;
        justify-content: center;
    }
}
</style>