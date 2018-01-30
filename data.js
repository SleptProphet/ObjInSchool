// developer data:
students.push(new Student("Mateo", "Hadeshian", 12));
students.push(new Student("Aiden", "Bao", 12));
teachers.push(new Teacher("Matt", "Albinson", "CompSci"));
teachers.push(new Teacher("Edna", "Mode", "Fashion Design"));
sections.push(new Section("Fashion Design",getTeacherByName("Mode"),25));
sections.push(new Section("Comp Sci", getTeacherByName("Albinson"),25));