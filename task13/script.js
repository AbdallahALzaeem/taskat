// لعبة حجر ورقة مقص
const choices = ["حجر", "ورقة", "مقص"];

// إدخال المستخدم
let userChoice = prompt("اختار: حجر أو ورقة أو مقص");

// إزالة المسافات الزائدة
userChoice = userChoice ? userChoice.trim() : "";

// التحقق من صحة الإدخال
if (!choices.includes(userChoice)) {
  alert("خطأ! لازم تكتب حجر أو ورقة أو مقص فقط");
} else {
  // اختيار الجهاز عشوائياً
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (userChoice === computerChoice) {
    result = "تعادل!";
  } else if (
    (userChoice === "حجر" && computerChoice === "مقص") ||
    (userChoice === "ورقة" && computerChoice === "حجر") ||
    (userChoice === "مقص" && computerChoice === "ورقة")
  ) {
    result = "إنت فزت! 🎉";
  } else {
    result = "الجهاز فاز! 💻";
  }

  alert("إنت اخترت: " + userChoice + "\nالجهاز اختار: " + computerChoice + "\n" + result);
}