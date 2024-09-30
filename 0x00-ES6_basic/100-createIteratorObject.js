export default function createIteratorObject(report) {
  let employees = [];
  // Get all employees from each department and store them in an array
  for (const department of Object.values(report.allEmployees)) {
    employees = employees.concat(department);
  }

  // Return an iterator over the employees array
  return employees[Symbol.iterator]();
}
