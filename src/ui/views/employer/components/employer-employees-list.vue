<template>

    <employees-list :columns="['id', 'name', 'title']">

        <template v-slot="{employees}">

            <tr v-for="(employee) in employees as TEmployeesList"
                :key="employee.id"
                @click="EmployerModule.selectEmployee(employee)"
            >
                <td class="w-64">{{ employee.id }}</td>
                <td class="w-64">{{ `${ employee.firstName } ${ employee.lastName }` }}</td>
                <td>{{ employee.title }}</td>
            </tr>

        </template>

    </employees-list>

</template>

<script setup lang="ts">

    import { EmployerModule } from '@modules/employer/employer.module'

</script>
