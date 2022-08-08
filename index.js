// Write your solution in this file!
let  employee = {
    name: "Aya",
    address:"iraq",
};

function updateEmployeeWithKeyAndValue(employee, key , value){
    let newObj ={...employee};
    newObj[key] = value;
    return newObj ;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key , value){
    employee[key] = value;
    return employee;

}
// console.log(employee);
 function deleteFromEmployeeByKey(employee,name){
     let  newDeleteObj = {...employee};
     delete  newDeleteObj.name;
      console.log(newDeleteObj );

    return  newDeleteObj ;
 }
 function destructivelyDeleteFromEmployeeByKey(){
    delete  employee.name;
    return employee ;

 }