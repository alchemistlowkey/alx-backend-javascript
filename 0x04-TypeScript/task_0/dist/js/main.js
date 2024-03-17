var student1 = {
    firstName: 'Haochen',
    lastName: 'Long',
    age: 16,
    location: 'Throne of Seal',
};
var student2 = {
    firstName: 'Hou',
    lastName: 'Yuhao',
    age: 15,
    location: 'Soul Land',
};
var studentsList = [student1, student2];
var renderTable = function (students) {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        var locationCell = document.createElement("td");
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
//# sourceMappingURL=main.js.map