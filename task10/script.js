function maskText(text) {
  const chars = Array.from(text); // لدعم الإيموجي والحروف الخاصة بشكل صحيح

  if (chars.length <= 200) {
    return text; // النص قصير، بيرجع زي ما هو
  }

  const start = chars.slice(0, 20).join("");
  const end = chars.slice(-20).join("");
  const dots = ".".repeat(chars.length - 40); // نقطة مكان كل حرف بالنص

  return start + dots + end;
}

// مثال على الاستخدام
const userText = prompt("اكتب النص:");
console.log(maskText(userText));