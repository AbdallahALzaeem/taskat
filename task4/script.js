let name = prompt("شو اسمك؟");
let age = Number(prompt("قديش عمرك؟"));

let user = {
  name: name,
  age: age,
  hasCases: false
};

if (user.age > 20) {
  user.hasCases = true;
}
else{
     user.hasCases = false; 
}

console.log(user);