const frutas = ["Manzanas", "Bananas"]

console.log(frutas.length)

// 2

const arr = ['este es el primer elemento', 'este es el segundo elemento', 'este es el último elemento']
console.log(arr[0])              // escribe en consola 'este es el primer elemento'
console.log(arr[1])              // escribe en consola 'este es el segundo elemento'
console.log(arr[arr.length - 1]) // escribe en consola 'este es el último elemento'


const months = ['January', 'February', 'March', 'April'];

months.forEach(function(month) {
  console.log(month);
});

/* output

January
February
March
April

*/

const months = ['January', 'February', 'March', 'April'];

console.log(months.map(function (month) {
  return month.toUpperCase();
})); // ["JANUARY", "FEBRUARY", "MARCH", "APRIL"]

const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
   ];


   const employee = employees.find(function (employee) {
    return employee.name.indexOf('John') > -1;
  });
  
  console.log(employee); // { name: "John Cena", age: 34 }

  const employees = [
    { name: 'David Carlson', age: 30 },
    { name: 'John Cena', age: 34 },
    { name: 'Mike Sheridan', age: 25 },
    { name: 'John Carte', age: 50 }
  ];
  
  let index = -1;
  
  for(let i = 0; i < employees.length; i++) {
    if(employees[i].name.indexOf('John') > -1) {
      index = i;
      break;
    }
  }
  
  console.log(index); // 1