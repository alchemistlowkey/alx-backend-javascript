export function printTeacher(firstName, lastName) {
    return firstName[0] + ". " + lastName + ")";
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
export { StudentClass };
//# sourceMappingURL=main.js.map