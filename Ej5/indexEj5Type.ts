/*Mediante genéricos y tuplas, 
tipa de forma completa la función para solventar los errores de compilación.*/

const swap = <T,K>(arg1:T, arg2:K) : [K,T]=> {
    return [arg2, arg1];
  };
  
let age: number, occupation: string;

[occupation, age] = swap<number,string>(39, "Placement officer");
console.log("Occupation: ", occupation);
console.log("Age: ", age);
