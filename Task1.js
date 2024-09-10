// Define an object template for an employee
function createEmployee(name, age, department, salary) {
    return {
        name: name,
        age: age,
        department: department,
        salary: salary
    };
}

// Example employee array
const employees = [
    createEmployee("Alice", 30, "Engineering", 60000),
    createEmployee("Bob", 25, "Marketing", 50000),
    createEmployee("Charlie", 35, "Engineering", 70000),
    createEmployee("David", 28, "Marketing", 55000),
    createEmployee("Eve", 40, "HR", 65000)
];

// Function to calculate the average salary
function calculateAverageSalary(employeeArray) {
    const totalSalary = employeeArray.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employeeArray.length;
}

// Function to find employees in a specific department
function findEmployeesInDepartment(employeeArray, departmentName) {
    return employeeArray.filter(employee => employee.department === departmentName);
}

// Function to increase salary by a specified percentage
function increaseSalary(employeeArray, percentage) {
    return employeeArray.map(employee => ({
        ...employee,
        salary: employee.salary + (employee.salary * (percentage / 100))
    }));
}

// Function to sort employees by age
function sortEmployeesByAge(employeeArray) {
    return employeeArray.slice().sort((a, b) => a.age - b.age);
}

// Example usage
console.log("Average Salary:", calculateAverageSalary(employees));
console.log("Employees in Engineering Department:", findEmployeesInDepartment(employees, "Engineering"));
console.log("Employees with 10% Salary Increase:", increaseSalary(employees, 10));
console.log("Employees Sorted by Age:", sortEmployeesByAge(employees));
