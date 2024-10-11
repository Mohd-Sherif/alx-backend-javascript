// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'Mohamed',
  lastName: 'Sherif',
  age: 24,
  location: 'Cairo',
};

const student2: Student = {
  firstName: 'Amr',
  lastName: 'Sherif',
  age: 20,
  location: 'Cairo',
};

// Create an array containing the student objects
const studentsList: Student[] = [student1, student2];

// Render the table using Vanilla JavaScript
const table = document.createElement('table');
const tableHeader = document.createElement('tr');

// Create and append header columns for the table
const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

tableHeader.appendChild(nameHeader);
tableHeader.appendChild(locationHeader);
table.appendChild(tableHeader);

// Iterate over studentsList and create table rows
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Append the table to the body of the document
document.body.appendChild(table);
