export default function getListStudentIds(studentListArray) {
  if (!Array.isArray(studentListArray)) {
    return [];
  }

  return studentListArray.map((student) => student.id);
}
