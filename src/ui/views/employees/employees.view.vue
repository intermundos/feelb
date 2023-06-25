<template>

    <app-page name="Employer">

        <a-container>

            <employees-list :columns="['name', 'email']">

                <template v-slot="{ employees }">

                    <tr v-for="(employee) in employees as TEmployeesList"
                        :key="employee.id"
                        @click="$router.push( `/employee/${ employee.id }` )"
                    >
                        <td class="w-64">{{ employee.firstName }} {{ employee.lastName }}</td>
                        <td>{{ employee.email }}</td>
                    </tr>

                </template>

            </employees-list>

        </a-container>

    </app-page>

</template>

<script setup lang="ts">

    const router = useRouter()

    function selectEmployee( id: string ) {
        router.push( `/employee/${ id }` )
    }
</script>
