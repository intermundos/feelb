import { EmployerModule } from '@modules/employer/employer.module'
import { expect }         from 'vitest'


describe( 'EmployerModule', () => {

    test( 'EmployerService.init', async () => {

        await EmployerModule.init()
        expect( Object.keys( EmployerModule.state.employees ) ).toHaveLength( 1 )

    } )

    test( 'EmployerService.addEmployee', async () => {

        const employee = {
            firstName: 'Test',
            lastName: 'Last name test',
            email: 'test@example.com',
            title: 'Test title',
        }

        const employeeId = EmployerModule.addEmployee( employee )

        expect( Object.keys( EmployerModule.state.employees ) ).toHaveLength( 2 )
        expect( EmployerModule.state.employees[ employeeId ] ).toBeDefined()
        expect( EmployerModule.state.employees[ employeeId ] ).toHaveProperty( 'email', employee.email )

    } )

} )
