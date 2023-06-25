<template>

    <a-table :columns="columns"
             :items="employees"
    >
        <template #tbody="{items}">

            <slot :employees="items"/>

        </template>

    </a-table>

</template>

<script setup lang="ts">

    import { EmployerModule } from '@modules/employer/employer.module'

    const employees = computed( () => EmployerModule.state.employees )

    defineProps<{ columns: string[]; }>()

</script>
