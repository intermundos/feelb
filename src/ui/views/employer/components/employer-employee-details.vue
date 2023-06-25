<style scoped lang="scss">

</style>

<template>

    <section class="employee-details drawer drawer-end">

        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" :checked="!!selected"/>

        <div class="drawer-side">

            <div class="drawer-overlay" @click="deselectEmployee"></div>

            <div class="drawer-content relative bg-white w-1/3 h-full p-5 overflow-y-auto pb-10">

                <button class="btn btn-circle btn-sm absolute top-3 right-3"
                        @click="deselectEmployee"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <div v-if="selected" class="content">

                    <h2 class="card-title mb-0">{{ selected.firstName }}</h2>
                    <p class="text-gray-500 text-base m-0">{{ selected.title }}</p>
                    <p class="text-gray-500 text-base m-0"><b>ID:</b> {{ selected.id }}</p>

                    <employee-monthly-report :employee-id="selected.id"
                                             :show-records="true"
                                             class="mt-10"
                    />

                </div>

            </div>

        </div>

    </section>

</template>

<script setup lang="ts">

    import { EmployerModule } from '@modules/employer/employer.module'

    const selected = computed( () => EmployerModule.state.selectedEmployee as TEmployee )

    function deselectEmployee() {
        EmployerModule.selectEmployee( null )
    }

</script>
