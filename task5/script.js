const users = [
  { name: "Abd", email: "Abd@gmail.com", type: "user" },
  { name: "abood", email: "abood@gmail.com", type: "admin" },
  { name: "ibraheem", email: "ibraheem@gmail.com", type: "user" },
  { name: "farah", email: "farah@gmail.com", type: "admin" },
  { name: "anas", email: "anas@gmail.com", type: "user" }

  
];

let userCount = 0;
let adminCount = 0;


users.forEach((user) => {
  if (user.type === "user") userCount++;
  else if (user.type === "admin") adminCount++;
});

console.log("عدد اليوزرز: " + userCount);
console.log("عدد الأدمنز: " + adminCount);