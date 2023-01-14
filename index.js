//first part
const user = {
  name: '',
  age: 0,
  sex: '',
}

let name = prompt("What is your name?");
let age = prompt("How old are you?");
let sex = prompt("Male or female?");
user.name = name;
user.age = age;
user.sex = sex;

console.log(user.name);
console.log(user.age);
console.log(user.sex);

alert(user.name);
alert(user.age);
alert(user.sex);

//second part

let userName = prompt("What is your name?");
if(userName === "Raigul"){
  alert(`Hello ${userName}~`);
} else {
  alert(`You are not ${userName}~`);
}

//third part

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a){
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2 || 3:
    alert('2,3');
    break;
}

//fourth part
let first_sum = 0;

for(let i = 0; i < 101; i++){
  if(i % 2 == 0){
    first_sum += i;
  }
}
console.log(first_sum);

let j = 0;

let second_sum = 0;

while(j < 101){
  if(j % 2 == 0){
    second_sum += j;
  }
}
console.log(second_sum);