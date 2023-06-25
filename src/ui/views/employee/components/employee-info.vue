<template>

    <section class="employee">

        <p class="name text-xl">
            {{ employee.firstName }} {{ employee.lastName }}
        </p>

        <p class="email text-lg text-gray-400">
            {{ employee.email }}
        </p>

    </section>

</template>

<script setup lang="ts">

    defineProps<{ employee: TEmployee }>()

</script>
