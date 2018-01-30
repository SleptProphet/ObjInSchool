//These run the constructors and add objects to respective arrays
function createStudent(){
    document.getElementById("theBox").innerHTML = "<input id=\"fName\" type=\"text\" placeholder=\"First Name\">\n" +
        "        <input id=\"lName\" type=\"text\" placeholder=\"Last Name\">\n" +
        "        <input id=\"grade\" type=\"number\" placeholder=\"Grade Number\">\n" +
        "        <button onclick=\"addStudent()\">Add Student</button>";
}
function createTeacher(){
    document.getElementById("theBox").innerHTML = "<input id=\"fName\" type=\"text\" placeholder=\"First Name\">\n" +
        "        <input id=\"lName\" type=\"text\" placeholder=\"Last Name\">\n" +
        "        <input id=\"subject\" type=\"text\" placeholder=\"Subject\">\n" +
        "        <button onclick=\"addTeacher()\">Add Teacher</button>";
}
function createSection(){
    document.getElementById("theBox").innerHTML = "<input type=\"text\" id=\"class\" placeholder=\"Course Title\">\n" +
        "        <input type=\"text\" id=\"teacherName\" placeholder=\"Teacher's Last Name\">\n" +
        "        <input type=\"number\" id=\"maxSize\" placeholder=\"Maximum Student Number\">\n" +
        "        <button onclick=\"addSection()\">Add Section</button>";
}
function addStudent(){
    students.push(new Student(document.getElementById("fName").value,document.getElementById("lName").value,document.getElementById("grade").value));
}
function addTeacher(){
    teachers.push(new Teacher(document.getElementById("fName").value,document.getElementById("lName").value,document.getElementById("subject").value));
}
function addSection(){
    sections.push(new Section(document.getElementById("class").value,getTeacherByName(document.getElementById("teacherName").value),parseInt(document.getElementById("maxSize").value)));
}
//these three convert arrays of objects into nice strings
function studentsView(a){
    if (typeof a == "number"){
        a = findSecById(a).stus;
    }
    var studentsView = [];
    for (var i=0; i<a.length; i++){
        studentsView.push("<br>" + a[i].fName + " " + a[i].lName + " Grade: " + a[i].grade);
    }
    return studentsView;
}
function teachersView(a){
    var teachersView = [];
    for (var i=0; i<a.length; i++){
        teachersView.push("<br>" + a[i].fName + " " + a[i].lName + ": " + a[i].subject);
    }
    return teachersView;
}
function sectionsView(a){
    var sectionsView = [];
    for (var i=0; i<a.length; i++){
        sectionsView.push("<br>" + a[i].name + " Taught by " + a[i].teacher);
    }
    return sectionsView;
}
//these tree display all of the objects in a given array
function seeAllStu(a){
    document.getElementById("theBox").innerHTML = studentsView(a);
}
function seeAllTea(a){
    document.getElementById("theBox").innerHTML = teachersView(a);
}
function seeAllSec(a){
    var tempSec = sectionsView(a);
    for (var i=0;i<a.length;i++){
        tempSec[i] += "   <button onclick='showStuForSec(" + a[i].id + ")'>Add Student</button>";
    }
    document.getElementById("theBox").innerHTML = tempSec;
}
//this shows all students that can be added to a given section as a string
function showStuForSec(s){
    var sec = findSecById(s);
    var tempStu = studentsView(students);
    for (var i=0; i<students.length; i++){
        tempStu[i] += "  <button id=student onclick='addStuToSec(" + students[i].id + "," + s + ")'>Add Student</button>";
    }
    console.log(tempStu);
    document.getElementById("theBox").innerHTML = "Which Students Do You Want to Add to "+ sec.name +"? <br><br>" + tempStu + "<br><br> " +
        "<button id='showStudentsInSection' onclick='seeAllStu("+ s +")' >See All Students In Section</button>";
}
//self explanatory
function addStuToSec(stuId,secId){
    findSecById(secId).stus.push(findStudentById(stuId));
}
//these allow me to find objects based on the values of certain keys
function findStudentById(stuId) {
    console.log(stuId);
    for (var i=0; i<students.length; i++) {
        if (stuId == students[i].id) {
            return students[i];
        }
    }
}
function findSecById(secId) {
    for (var i=1; i<sections.length; i++) {
        if (secId = sections[i].id) return sections[i];
    }
}
function getTeacherByName(name){
    for (var i = 0 ; i < teachers.length ; i++){
        if (teachers[i].lName == name || teachers[i].fName == name) return teachers[i];
    }
    document.getElementById("theBox").innerHTML = "No Teachers Named " + name;
}
function getStudentByName(name){
    for (var i = 0 ; i < students.length ; i++){
        if (students[i].fName == name || students[i].lName == name) return students[i];
    }
    document.getElementById("theBox").innerHTML = "No Students Named " + name;
}
function getSectionByName(name){
    for (var i = 0 ; i < sections.length ; i++){
        if (sections[i].name == name) return sections[i];
    }
    document.getElementById("theBox").innerHTML = "No Sections Named " + name;
}
//these find objects based on names and return relevant info about them in a string
function searchStudent() {
    var stu = getStudentByName(document.getElementById("searchStudent").value);
    document.getElementById("theBox").innerHTML = stu.fName + " " + stu.lName + "<br>" + "id: " + stu.id + "<br>Grade: " + stu.grade;
}
function searchTeacher() {
    var tea = getTeacherByName(document.getElementById("searchTeacher").value);
    document.getElementById("theBox").innerHTML = tea.fName + " " + tea.lName + " <br> Subject: " + tea.subject;
}
function searchSection(){
    var sec = getSectionByName(document.getElementById("searchSection").value);
    document.getElementById("theBox").innerHTML = sec.name + "<br>Teacher: " + sec.teacher + "<br><br>Students: " + studentsView(sec.stus);
}