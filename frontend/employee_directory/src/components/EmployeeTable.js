import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_EMPLOYEE_LIST_QUERY } from "../GraphQL/Queries";

function EmployeeTable() {
  const { data } = useQuery(GET_EMPLOYEE_LIST_QUERY);

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    if (data) {
        setEmployeeList(data.getAllEmployee);
    }
  }, [data]);

  const rows =
    employeeList.length > 0 ? (
        employeeList.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.age}</td>
          <td>{employee.dateOfJoining.split("T")[0]}</td>
          <td>{employee.title}</td>
          <td>{employee.department}</td>
          <td>{employee.employeeType}</td>
          <td>{employee.currentStatus ? 'Working' : 'Retired'}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={8} className="text-center">
          <b>No record found</b>
        </td>
      </tr>
    );
  return (
    <table className="table table-striped mt-5 table-success">
      <thead>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Age</td>
          <td>Date of Joining</td>
          <td>Title</td>
          <td>Department</td>
          <td>Employment Type</td>
          <td>Current Status</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default EmployeeTable;
