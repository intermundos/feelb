<template>

    <app-page name="employer">

        <a-container class="pb-10">
            <employer-toolbar class="mb-10"/>
            <employer-employees-list class="col-span-2"/>
        </a-container>

    </app-page>

    <employer-employee-details/>

</template>

<script setup lang="ts">

    import { TimeClockModule } from '@modules/time-clock/time-clock.module'

</script>
