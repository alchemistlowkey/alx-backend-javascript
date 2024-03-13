export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  return studentArray
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: matchingGrade ? matchingGrade.grade : 'N/A',
      };
    });
}
