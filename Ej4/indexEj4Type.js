/*Utilizando las misma interfaz de Student,
de los ejercicios anteriores arregla los errores de TypeScript para que podamos pasar aquellos criterios
que necesitemos sin tener que pasar toda la información de un Student.
Arregla los subsiguientes errores que aparezcan al asignar tipo a criteria.*/
var students = [
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
var filterStudentsBy = function (students, criteria) {
    return students.filter(function (student) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return criteria[fieldName] === student[fieldName];
        });
    });
};
var logStudent = function (_a) {
    var name = _a.name, occupation = _a.occupation;
    console.log("  - ".concat(name, ", ").concat(occupation));
};
console.log("Students of age 35:");
filterStudentsBy(students, { age: 35 }).forEach(logStudent);
console.log("Students of occupation Placement officer:");
filterStudentsBy(students, { occupation: "Placement officer" }).forEach(logStudent);
