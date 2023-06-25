import { mount }     from '@vue/test-utils'
import EmployeesList from './employees-list.vue'

describe( 'EmployeesTable.vue', () => {

    let wrapper

    beforeEach( () => {

        vi.mock( '@modules/employer/employer.module', () => ( {
            EmployerModule: {
                state: {
                    employees: [
                        { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
                        { id: '2', name: 'Jane Doe', email: 'jane.doe@example.com' },
                    ],
                },
            },
        } ) )

        vi.mock( '@components/ATable.vue', () => ( {
            name: 'ATable',
            template: '<div><slot :items="items"></slot></div>',
            props: [ 'columns', 'items' ],
            computed: {
                items() {
                    return this.$props.items
                },
            },
        } ) )

        const TestComponent = {
            components: { EmployeesList },
            template: `
                <employees-list :columns="['name', 'email']">
                <template v-slot="{ employees }">
                    <div class="test-component">
                        <div v-for="employee in employees">{{ employee.name }} {{ employee.email }}</div>
                    </div>
                </template>
                </employees-list>
            `,
        }

        wrapper = mount( TestComponent )
    } )

    it( 'renders employees data in slot correctly', () => {
        const testDivs = wrapper.findAll( '.test-component div' )
        expect( testDivs.length ).toBe( 2 )
        expect( testDivs[ 0 ].text() ).toBe( 'John Doe john.doe@example.com' )
        expect( testDivs[ 1 ].text() ).toBe( 'Jane Doe jane.doe@example.com' )
    } )
} )

