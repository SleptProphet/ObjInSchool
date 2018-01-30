//Constructors
function Student(fName, lName, grade) {
    this.id = stuId++;
    this.fName = fName;
    this.lName = lName;
    this.grade = grade;
}
function Teacher(fName,lName,subject){
    this.id = teaId++;
    this.fName = fName;
    this.lName = lName;
    this.subject = subject;
}
function Section(name,teacher,maxSize){
    this.id = secId++;
    this.name = name;
    this.maxSize = maxSize;
    this.teacher = teacher.fName +" "+ teacher.lName;
    this.stus = [];
}
//global vars
var stuId = 0;
var teaId = 0;
var secId = 0;
var students = [];
var teachers = [];
var sections = [];

