<style scoped lang="scss">

    tbody :deep(tr) {
        @apply cursor-pointer hover:bg-gray-100;
    }

</style>

<template>

    <div class="overflow-x-auto">

        <table class="table">
            <!-- head -->
            <thead>
            <tr>
                <th v-for="column in columns"
                    :key="column"
                    class="uppercase"
                >
                    {{ column }}
                </th>
            </tr>
            </thead>

            <tbody>
            <slot name="tbody" :items="items"></slot>
            </tbody>

        </table>

    </div>

</template>

<script setup lang="ts" generic="Row extends { id: string}">

    defineProps<{ columns: string[]; items: Row[] | Record<string, Row>; }>()

</script>

