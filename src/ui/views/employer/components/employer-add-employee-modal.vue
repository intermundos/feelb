<style scoped lang="scss">

</style>

<template>

    <button class="btn" @click="open = true">
        Add employee
    </button>

    <a-modal :open="open"
             @close="open = false"
             title="Add employee"
    >

        <form @submit.prevent class="pt-5 flex flex-col gap-3">

            <a-input type="text"
                     placeholder="First name"
                     :value="form.data.firstName"
                     @input="( value ) => form.data.firstName = value"
            />

            <a-input type="text"
                     placeholder="Last name"
                     :value="form.data.lastName"
                     @input="( value ) => form.data.lastName = value"
            />

            <a-input type="text"
                     placeholder="Title"
                     :value="form.data.title"
                     @input="( value ) => form.data.title = value"
            />

        </form>

        <template #footer>

            <section class="actions flex justify-end gap-2">

                <button class="btn btn-ghost btn-sm"
                        @click="open = false"
                >
                    Cancel
                </button>

                <button class="btn btn-primary btn-sm px-10 rounded"
                        @click="submit"
                >
                    Add
                </button>

            </section>

        </template>

    </a-modal>

</template>

<script setup lang="ts">

    import { EmployerModule } from '@modules/employer/employer.module'

    const open = ref( false )

    const formInitialState = () => ( {
        firstName: '',
        lastName: '',
        title: '',
        email: '',
    } )

    const form = reactive<{ data: TAddEmployeeArgs }>( { data: formInitialState() } )

    function submit() {

        const { title, firstName, lastName } = form.data

        if ( title && firstName && lastName ) {
            EmployerModule.addEmployee( form.data )
            open.value = false
            form.data = { ...formInitialState() }
        }
    }

</script>
