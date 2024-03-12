export default function getStudentIdsSum(studentArray) {
  return studentArray.reduce((sum, student) => sum + student.id, 0);
}
