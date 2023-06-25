import { BaseVueModule }          from '@core/base/base-vue-module'
import { UUIDTimeBasedGenerator } from '@utils/crypto'
import { EmployerService }        from '@modules/employer/employer.service'

export const EmployerModule = new class Employer extends BaseVueModule<TEmployerState> {
    constructor() {

        super( 'employer', {
            employees: {},
            selectedEmployee: null,
        } )

        this.init().catch( console.error )

    }

    public async init() {
        const list = await EmployerService.getEmployeesList()
        this.state.employees = list
    }

    public addEmployee( employee: TAddEmployeeArgs ) {
        const id = UUIDTimeBasedGenerator()
        this.state.employees[ id ] = { ...employee, id, timeRecords: [] }
        return id
    }

    public selectEmployee( employee: TEmployee | null ) {
        this.state.selectedEmployee = employee
    }

    public getEmployee( employeeId: string ) {
        return this.state.employees[ employeeId ] as TEmployee
    }

}






