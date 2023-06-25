import { EmployerService } from '@modules/employer/employer.service'

describe( 'EmployerService', () => {

    test( 'EmployerService.getEmployeesList', async () => {
        const list = await EmployerService.getEmployeesList()
        expect( list ).toBeTruthy()
        expectTypeOf( list ).toMatchTypeOf<TEmployeesList>()
    } )

} )
