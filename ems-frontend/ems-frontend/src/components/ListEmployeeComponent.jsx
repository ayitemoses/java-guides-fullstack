import React, {useState, useEffect} from 'react'
import { listEmployees } from '../services/EmployeeServices';
import { useNavigate } from 'react-router-dom';







const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    function addNewEmployee() {

        navigator('/add-employee');

    }

    /* const dummyData = [ 
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "emailId": "john.doe@example.com" 
        }, 
        {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Smith",
            "emailId": "jane.smith@example.com"
        },
        {
            "id": 3,
            "firstName": "Bob",
            "lastName": "Johnson",
            "emailId": "bob.johnson@example.com"
        }
    ] */

    
  return (
    <div className="container">
        <h2 className="text-center">List of Employees</h2>
        <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>EmployeeFirst Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent