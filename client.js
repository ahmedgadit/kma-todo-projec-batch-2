var studentData = []

// parameters
function addStudentData(student) {
  if(student.rollno  && studentData.findIndex((x) => { return x.rollno == student.rollno }) !== -1) {
    console.log("Already added in the database");
  }
  studentData.push(student);
}