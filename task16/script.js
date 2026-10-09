const meals = [
  { name: "كالزوني", price: 35 },
  { name: "بيتزا", price: 25 },
  { name: "شاورما", price: 20 },
  { name: "برجر", price: 25 },
  { name: "تشكن راب", price: 35 },
  { name: "سوري مسحب بالجبنة", price: 35 },
  { name: "شاورما سوري", price: 25 },
  { name: "فطيرة", price: 30 }
];

const currency = "شيكل";

const budget = parseFloat(prompt("أدخل المبلغ الذي معك:"));

if (isNaN(budget) || budget < 0) {
  alert("الرجاء إدخال رقم صحيح");
} else {
  const affordable = meals.filter(meal => meal.price <= budget);

  if (affordable.length === 0) {
    alert("للأسف، لا توجد وجبات بهذا المبلغ");
  } else {
    const list = affordable.map(meal => `${meal.name} - ${meal.price} ${currency}`).join("\n");
    alert("الوجبات المتاحة لك:\n" + list);
  }
}