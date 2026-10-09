function checkLoad(users) {
  let totalWeight = 0;
  for (const user of users) {
    totalWeight += user.weight;
  }

  if (users.length > 10 || totalWeight > 1000) {
    alert("حمولة زائدة! العدد: " + users.length + " الوزن: " + totalWeight);
  } else {
    alert("الحمولة مقبولة. العدد: " + users.length + " الوزن: " + totalWeight);
  }
}

const users = [];
const count = Number(prompt("كم عدد الأشخاص؟"));

for (let i = 1; i <= count; i++) {
  const name = prompt("اسم الشخص رقم " + i);
  const weight = Number(prompt("وزن " + name));
  users.push({ name: name, weight: weight });
}

checkLoad(users);