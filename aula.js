let totalSalaries = 0;
const numEmployees = 10;

for (let i = 1; i <= numEmployees; i++) {
  let salary = prompt("Digite o salário do funcionário " + i + ": ");
  totalSalaries += parseFloat(salary);
}

let averageSalary = totalSalaries / numEmployees;
console.log("A média salarial da equipe é: " + averageSalary.toFixed(2));