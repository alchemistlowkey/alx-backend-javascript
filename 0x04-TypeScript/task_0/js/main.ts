interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const student1: Student = {
  firstName: 'Haochen'
  lastName: 'Long'
  age: 16
  location: 'Throne of Seal'
}

const student1: Student = {
  firstName: 'Hou'
  lastName: 'Yuhao'
  age: 15
  location: 'Soul Land'
}

const studentsList: Student[] = [student1, student2]

const renderTable = (students: Student[]) => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  students.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};

renderTable(studentsList);
