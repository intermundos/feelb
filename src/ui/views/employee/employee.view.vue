<template>

    <app-page name="Employer">

        <a-container>

            <back-button/>

            <employee-info :employee="employee" class="py-5"/>

            <employee-puch-clock :employee-id="employee.id"/>

            <a-container class="grid grid-cols-2 gap-16 pt-10">

                <employee-time-records :employee-id="employee.id"/>

                <employee-monthly-report :employee-id="employee.id" :show-records="false"/>

            </a-container>

        </a-container>

    </app-page>

</template>

<script setup lang="ts">

    import { EmployerModule } from '@modules/employer/employer.module'

    const route = useRoute()

    const employee = EmployerModule.state.employees[ route.params.id as string ]

</script>
