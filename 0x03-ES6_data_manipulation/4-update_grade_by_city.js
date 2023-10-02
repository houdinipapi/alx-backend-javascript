function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: matchedGrade ? matchedGrade.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
