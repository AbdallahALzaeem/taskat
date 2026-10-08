const secret = Math.floor(Math.random() * 50) + 1;
let guess;
let attempts = 0;

while (guess !== secret) {
  guess = Number(prompt("خمّن رقم من 1 إلى 50:"));
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 50) alert("دخّل رقم صحيح بين 1 و 50!");
  else if (guess < secret) alert("الرقم أكبر ⬆️");
  else if (guess > secret) alert("الرقم أصغر ⬇️");
}

alert(`صح! 🎉 الرقم هو ${secret}، وجبته بـ ${attempts} محاولة`);