import { employ } from "../model/employ";

export class EmployeesService {
    employees = [
        {name : 'pepito',
        age: 30,
        charge : "Engineer",
        state : 'active'    },
        {name : 'juanito',
        age: 30,
        charge : "Manager",
        state : 'active'}
    ]

    public getEmployee(id : number){
        return this.employees[id];
    }

    public setEmployee(id : number, employee : employ){
        this.employees[id] = employee;
    }
}