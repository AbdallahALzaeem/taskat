 function showProfit() {
  // 1) نقرأ عدد الساعات من الخانة
  const hoursPerDay = Number(document.getElementById("hoursInput").value);
  const resultBox = document.getElementById("result");

  // 2) نتأكد إنو الرقم صحيح (بين 0 و 24)
  if (isNaN(hoursPerDay) || hoursPerDay <= 0 || hoursPerDay > 24) {
    resultBox.innerHTML = '<span class="err">الرجاء إدخال رقم أكبر من صفر وما بيتجاوز 24</span>';
    return;
  }

  // 3) القيم الثابتة
  const pricePerHour = 30;
  const costPercent = 40;
  const daysPerWeek = 6;
  const weeksPerMonth = 4;

  // 4) الحساب
  const dailyRevenue = hoursPerDay * pricePerHour;
  const dailyProfit = dailyRevenue - dailyRevenue * (costPercent / 100);
  const weeklyProfit = dailyProfit * daysPerWeek;
  const monthlyProfit = weeklyProfit * weeksPerMonth;

  // 5) عرض النتيجة على الشاشة
  resultBox.innerHTML =
    "صافي الربح باليوم: <strong>" + dailyProfit.toFixed(2) + "$</strong><br>" +
    "صافي الربح بالأسبوع: <strong>" + weeklyProfit.toFixed(2) + "$</strong><br>" +
    "صافي الربح بالشهر: <strong>" + monthlyProfit.toFixed(2) + "$</strong>";
}

// الحساب كمان لما تكبس Enter
document.getElementById("hoursInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") showProfit();
});