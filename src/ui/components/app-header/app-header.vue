<style scoped lang="scss">

    .router-link-active {
        background-color: hsl(var(--bc) / 0.1);
        --tw-text-opacity: 1;
        color: hsl(var(--bc) / var(--tw-text-opacity));
    }

</style>

<template>

    <header class="mb-5">

        <a-container>

            <div class="navbar bg-base-100">

                <span class="normal-case text-2xl px-5">
                    🕒 Time Clock
                </span>

                <div class="navbar-center lg:flex">

                    <ul class="menu menu-horizontal px-1">

                        <li>
                            <router-link to="/employer">👮‍ Employer</router-link>
                        </li>

                        <li>
                            <router-link to="/employee">👷 Employees</router-link>
                        </li>

                    </ul>

                </div>

            </div>
        </a-container>

    </header>

</template>
