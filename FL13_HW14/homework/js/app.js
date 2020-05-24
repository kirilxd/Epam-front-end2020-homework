// Your code goes here
class Student {
  constructor(name, email) {
    let _name = name;
    let _email = email;
    let _homeworkResults = [];
    this.getName = () => {
      return _name;
    };
    this.getEmail = () => {
      return _email;
    };
    this.addHomeworkResult = (topic, success) => {
      _homeworkResults.push({ topic, success });
    };
    this.getHomeworkResult = () => {
      return _homeworkResults;
    };
  }
}
class FrontendLab {
  constructor(students) {
    let studentsList = students;
    this.printStudentsList = () => {
      console.log(studentsList);
    };
  }
}
