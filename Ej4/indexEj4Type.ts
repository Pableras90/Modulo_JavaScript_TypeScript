/*Utilizando las misma interfaz de Student,
de los ejercicios anteriores arregla los errores de TypeScript para que podamos pasar aquellos criterios
que necesitemos sin tener que pasar toda la información de un Student. 
Arregla los subsiguientes errores que aparezcan al asignar tipo a criteria.*/

interface Student {
    name: string;
    age: number;
    occupation: string;
  }

const students: Student[] = [
    {
      name: "Luke Patterson",
      age: 32,
      occupation: "Internal auditor",
    },
    {
      name: "Emily Coleman",
      age: 25,
      occupation: "English",
    },
    {
      name: "Alexandra Morton",
      age: 35,
      occupation: "Conservation worker",
    },
    {
      name: "Bruce Willis",
      age: 39,
      occupation: "Placement officer",
    },
  ];
  //He usado any porque con Unknown me daba error al ser más restrictivo
  
  const filterStudentsBy = (students: Student[], criteria: any): Student[] => {
    return students.filter((student) => {
      const criteriaKeys = Object.keys(criteria as object);
      return criteriaKeys.every((fieldName) => {
        return criteria[fieldName] === student[fieldName as keyof Student];
      });
    });
  };
  
  const logStudent = ({ name, occupation }: Student) => {
    console.log(`  - ${name}, ${occupation}`);
  };
  
  console.log("Students of age 35:");
  filterStudentsBy(students, { age: 35 }).forEach(logStudent);
  console.log("Students of occupation Placement officer:");
  filterStudentsBy(students, { occupation: "Placement officer" }).forEach(logStudent);