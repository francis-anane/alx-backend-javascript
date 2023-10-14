export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (Array.isArray(getListStudents)) {
    // filter by student location
    const filteredStudents = getListStudents
      .filter((student) => student.location === city)
      .map((student) => {
        const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
        student.grade = matchingGrade ? matchingGrade.grade : 'N/A';
        return student;
      });
    return filteredStudents;
  }
  return [];
}
