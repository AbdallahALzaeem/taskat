function getLongestName(...names) {
  if (names.length > 10) {
    console.log("مسموح فقط 10 أسماء");
    names = names.slice(0, 10);
  }

  let longest = names[0];
  for (const name of names) {
    if (name.length > longest.length) longest = name;
  }
  return longest;
}

// نسأل عن عدد الأسماء
const count = parseInt(prompt("كم اسم بدك تدخل؟"));

if (isNaN(count) || count <= 0) {
  console.log("لازم تدخل رقم صحيح أكبر من صفر");
} else {
  const inputNames = [];

  for (let i = 1; i <= count; i++) {
    const name = prompt("أدخل الاسم رقم " + i + ":");
    if (name === null) break;              // إذا كبس Cancel بيوقف
    if (name.trim() !== "") inputNames.push(name.trim());
  }

  if (inputNames.length === 0) {
    console.log("ما دخلت ولا اسم");
  } else {
    const result = getLongestName(...inputNames);
    console.log("الاسم الأطول هو: " + result);
  }
}