function sortEmp(emp){
    emp.sort((obj1,obj2)=>{
    return obj1.score-obj2.score;
   });  
}
let employees = [
    { name: 'John', dob: 'Dec 15, 2007', score: 80 },
    { name: 'Ana', dob: 'Jan 15, 2009', score: 75 },
    { name: 'Zion', dob: 'Feb 15, 2011', score: 90 },
  ];
  sortEmp(employees);
  console.log(employees);
  