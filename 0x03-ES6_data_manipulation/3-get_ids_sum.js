export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((accumulator, student) => accumulator + student.id, 0);
  }
  return 0;
}
