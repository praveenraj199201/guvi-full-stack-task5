// for
var arr = [ {"id":"10080", "class": "A"}, {"id":"10081", "class": "B"}];
  console.log("for loop");  
for (var i = 0; i < arr.length; i++){
    var obj = arr[i];
  for (var key in obj){
    var value = obj[key];
    console.log( key + ": " + value);
  }
}

//for in
var jsonObject = {
    name: 'praveen raj',
    Age: '27'
  };
  console.log("for in loop");
  for (var key in jsonObject) {
    
    console.log(key +":"+ jsonObject[key]);
  }

//for of

var mycars = [{name:'RK'}, {name:'BMW'}];
console.log("for of loop");
for (var car of mycars) 
{
  console.log("name:",car.name);
}

//for each
let text = "";
const fruits = ["apple", "orange", "cherry"];
console.log("for each loop")
fruits.forEach(myFunction);
console.log(text);
 
function myFunction(item, index) {
  text += index + ": " + item +" "; 
}
