let num = Number(prompt("أدخل رقم:"));

if (isNaN(num)) {
  alert("هذا ليس رقماً!");
} else {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  alert("المضروب هو: " + result);
}