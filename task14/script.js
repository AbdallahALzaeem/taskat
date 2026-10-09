 const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const bannedWords = ["تواصل", "واتس", "خارج", "رقمي"];

function isBlocked(message) {
  let count = 0;
  for (let i = 0; i < bannedWords.length; i++) {
    if (message.includes(bannedWords[i])) {
      count++;
    }
  }
  return count >= 2;
}

function ask() {
  rl.question("اكتب رسالتك: ", function (message) {
    if (message === "خروج") {
      rl.close();
      return;
    }

    if (isBlocked(message)) {
      console.log("❌ هذا الأمر غير مرغوب به داخل المنصة\n");
    } else {
      console.log("✅ تم إرسال الرسالة: " + message + "\n");
    }

    ask(); // يسأل عن رسالة جديدة
  });
}

ask();