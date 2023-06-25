<template>

    <div class="app-layout flex flex-col h-full">

        <app-header/>

        <router-view v-slot="{ Component }">

            <main>

                <component :is="Component"/>

            </main>

        </router-view>

    </div>

</template>
