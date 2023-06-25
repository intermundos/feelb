export const EmployerService = new class EmployerService {

    async getEmployeesList() {
        const { default: list } = await import('@core/data/employees.mock')
        return list as unknown as TEmployeesList
    }

}
