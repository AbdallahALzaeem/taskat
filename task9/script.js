function checkEmail(email) {
  return !email.includes("test");
}

let count = Number(prompt("كم مستخدم؟"));

let users = Array.from({ length: count }, function () {
  return { name: prompt("الاسم:"), email: prompt("الإيميل:") };
});

let result = users.filter(function (user) {
  return checkEmail(user.email);
});

alert(JSON.stringify(result));