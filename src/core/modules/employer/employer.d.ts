type TEmployerState = {
    employees: Record<string, TEmployee>;
    selectedEmployee: TEmployee | null;
}

type TEmployee = {
    id: string;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    timeRecords: TEmployeeTimeRecords;
}

type TEmployeesList = Record<string, TEmployee>

type TAddEmployeeArgs = Omit<TEmployee, 'id' | 'timeRecords'>
