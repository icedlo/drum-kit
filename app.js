 function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2 ,operator) {
    return operator(num1 , num2)
}
console.log(calculator(6,2,add));

//var houseKeeper1={
    //yearsOfExperience:12,
    //cleaningRepetoire:["hotel","train","lobby","motel"],
  //  name: "lillian",
//}
//console.log(houseKeeper1.cleaningRepetoire);

function HouseKeeping(yearsOfExperience,cleaningRepertoire,name){
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.name=name;
    this.clean=function(){
        alert("cleaning in progress");
        washCar();
        cookDinner();
}
}
var houseKeeper1=new HouseKeeping(12,["hotel","lobby","motel"],"jennie" );
var houseKeeper1=new HouseKeeping(12,["hotel","lobby","motel"],"jennie");
var houseKeeper3=new HouseKeeping(12,["hotel","lobby","motel"],"Molly");

console.log(houseKeeper1.name)
houseKeeper3.clean();