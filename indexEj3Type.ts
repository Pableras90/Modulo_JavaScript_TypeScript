/*Con el resultado del ejercicio 2, sustituye la función logUser por la siguiente y modifica el código aplicando las guardas que creas conveniente para corregir los errores de compilación:*/






interface Student {
    name: string;
    age: number;
    occupation: string;
  }

interface Teacher {
  name: string;
  age: number;
  subject: string;
}

const users2: (Teacher | Student)[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Jane Doe",
    age: 41,
    subject: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    subject: "Biology",
  },
];



users2.forEach(logUser);
const logUse = (user: Student | Teacher) => {
  let extraInfo: string;
  if (user.isStudent) {
    extraInfo = user.occupation;
  } else {
    extraInfo = user.subject;
  }
  console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};

const isStudent =(user:Student)
/*Extra: Crea dos funciones isStudent e isTeacher que apliquen la guarda y úsalas en la función logPerson. Aplica tipado completo en la función (argumentos y valor de retorno). Utiliza is.*/