 // ================================================
//  بيانات المقابر: 30 متوفى
// ================================================

// سعة كل قسم (رح نحتاجها لما نوصل لدالة القبور الفارغة)
 const sectionsCapacity = { A: 15, B: 15, C: 10 };
 
const graves = [
  { id: 1, name: "أحمد محمود", birthDate: "1945-03-12", deathDate: "2020-07-04", section: "A", graveNumber: 1, visitors: [{ name: "خالد أحمد", date: "2024-01-05" }, { name: "سارة أحمد", date: "2024-03-18" }, { name: "خالد أحمد", date: "2024-06-01" }] },
  { id: 2, name: "فاطمة علي", birthDate: "1952-11-30", deathDate: "2021-02-15", section: "A", graveNumber: 2, visitors: [{ name: "منى حسن", date: "2024-02-10" }] },
  { id: 3, name: "محمد يوسف", birthDate: "1960-06-20", deathDate: "2020-12-01", section: "A", graveNumber: 3, visitors: [{ name: "يوسف محمد", date: "2023-12-25" }, { name: "ليلى يوسف", date: "2024-04-02" }, { name: "يوسف محمد", date: "2024-05-20" }, { name: "عمر سعيد", date: "2024-07-11" }] },
  { id: 4, name: "عائشة حسين", birthDate: "1948-04-05", deathDate: "2019-10-14", section: "A", graveNumber: 5, visitors: [] },
  { id: 5, name: "علي عبد الله", birthDate: "1939-09-18", deathDate: "2018-01-22", section: "A", graveNumber: 6, visitors: [{ name: "عبد الله علي", date: "2024-03-10" }, { name: "رنا علي", date: "2024-08-19" }] },
  { id: 6, name: "زينب مصطفى", birthDate: "1965-12-01", deathDate: "2022-05-30", section: "A", graveNumber: 7, visitors: [{ name: "مصطفى كمال", date: "2024-05-30" }] },
  { id: 7, name: "حسن إبراهيم", birthDate: "1950-02-28", deathDate: "2020-03-17", section: "A", graveNumber: 8, visitors: [{ name: "إبراهيم حسن", date: "2023-11-02" }, { name: "نور حسن", date: "2024-01-20" }, { name: "إبراهيم حسن", date: "2024-04-15" }] },
  { id: 8, name: "مريم سليمان", birthDate: "1972-07-09", deathDate: "2023-01-08", section: "A", graveNumber: 10, visitors: [{ name: "سليمان داود", date: "2024-02-14" }, { name: "هالة سليمان", date: "2024-06-22" }] },
  { id: 9, name: "عمر خليل", birthDate: "1943-05-15", deathDate: "2021-08-03", section: "A", graveNumber: 11, visitors: [] },
  { id: 10, name: "خديجة رشيد", birthDate: "1958-10-25", deathDate: "2021-11-11", section: "A", graveNumber: 12, visitors: [{ name: "رشيد سامي", date: "2024-03-03" }, { name: "دينا رشيد", date: "2024-03-25" }, { name: "رشيد سامي", date: "2024-07-07" }, { name: "ياسر رشيد", date: "2024-09-01" }, { name: "دينا رشيد", date: "2024-10-12" }] },
  { id: 11, name: "يوسف نصر", birthDate: "1935-01-01", deathDate: "2019-04-19", section: "A", graveNumber: 14, visitors: [{ name: "نصر يوسف", date: "2023-10-10" }] },
  { id: 12, name: "آمنة طه", birthDate: "1969-08-08", deathDate: "2022-12-24", section: "A", graveNumber: 15, visitors: [{ name: "طه عادل", date: "2024-01-01" }, { name: "سلمى طه", date: "2024-05-05" }] },
  { id: 13, name: "سعاد إبراهيم", birthDate: "1938-01-08", deathDate: "2019-09-23", section: "B", graveNumber: 1, visitors: [] },
  { id: 14, name: "إبراهيم سالم", birthDate: "1970-08-14", deathDate: "2022-08-10", section: "B", graveNumber: 3, visitors: [{ name: "سالم إبراهيم", date: "2024-03-01" }, { name: "هدى سالم", date: "2024-03-15" }] },
  { id: 15, name: "محمود عيسى", birthDate: "1955-03-30", deathDate: "2020-06-06", section: "B", graveNumber: 4, visitors: [{ name: "عيسى محمود", date: "2023-12-01" }, { name: "جنى عيسى", date: "2024-02-28" }, { name: "عيسى محمود", date: "2024-06-06" }] },
  { id: 16, name: "ليلى فؤاد", birthDate: "1962-09-12", deathDate: "2021-03-21", section: "B", graveNumber: 5, visitors: [{ name: "فؤاد نبيل", date: "2024-03-21" }] },
  { id: 17, name: "عبد الرحمن زكي", birthDate: "1947-12-19", deathDate: "2018-07-30", section: "B", graveNumber: 6, visitors: [{ name: "زكي عبد الرحمن", date: "2024-04-04" }, { name: "ريم زكي", date: "2024-08-08" }] },
  { id: 18, name: "هند جمال", birthDate: "1975-04-22", deathDate: "2023-06-15", section: "B", graveNumber: 8, visitors: [{ name: "جمال فارس", date: "2024-01-15" }, { name: "تالا جمال", date: "2024-02-02" }, { name: "جمال فارس", date: "2024-06-15" }, { name: "كريم جمال", date: "2024-09-20" }] },
  { id: 19, name: "سامي ناصر", birthDate: "1951-06-11", deathDate: "2020-01-29", section: "B", graveNumber: 9, visitors: [] },
  { id: 20, name: "نادية وليد", birthDate: "1966-02-17", deathDate: "2021-09-09", section: "B", graveNumber: 10, visitors: [{ name: "وليد شريف", date: "2024-07-25" }] },
  { id: 21, name: "طارق منصور", birthDate: "1980-11-03", deathDate: "2022-02-02", section: "B", graveNumber: 12, visitors: [{ name: "منصور طارق", date: "2023-11-20" }, { name: "لينا منصور", date: "2024-02-02" }, { name: "منصور طارق", date: "2024-05-12" }] },
  { id: 22, name: "رقية بشير", birthDate: "1941-07-27", deathDate: "2019-12-12", section: "B", graveNumber: 13, visitors: [{ name: "بشير عمر", date: "2024-04-30" }] },
  { id: 23, name: "جميل أنور", birthDate: "1957-05-05", deathDate: "2023-03-03", section: "B", graveNumber: 14, visitors: [{ name: "أنور جميل", date: "2024-03-03" }, { name: "مها أنور", date: "2024-06-18" }] },
  { id: 24, name: "صفية مراد", birthDate: "1949-10-10", deathDate: "2020-10-09", section: "C", graveNumber: 1, visitors: [{ name: "مراد صالح", date: "2024-01-09" }, { name: "أسماء مراد", date: "2024-04-09" }] },
  { id: 25, name: "فارس عادل", birthDate: "1968-03-14", deathDate: "2021-05-25", section: "C", graveNumber: 2, visitors: [] },
  { id: 26, name: "سلوى حامد", birthDate: "1959-01-31", deathDate: "2022-10-31", section: "C", graveNumber: 4, visitors: [{ name: "حامد سلوى", date: "2023-12-31" }, { name: "عبير حامد", date: "2024-03-31" }, { name: "حامد سلوى", date: "2024-07-31" }] },
  { id: 27, name: "نبيل رضا", birthDate: "1944-08-16", deathDate: "2018-11-05", section: "C", graveNumber: 5, visitors: [{ name: "رضا نبيل", date: "2024-02-20" }] },
  { id: 28, name: "غادة شوقي", birthDate: "1977-06-06", deathDate: "2023-09-14", section: "C", graveNumber: 7, visitors: [{ name: "شوقي عماد", date: "2024-01-25" }, { name: "روان شوقي", date: "2024-03-12" }, { name: "شوقي عماد", date: "2024-05-25" }, { name: "آدم شوقي", date: "2024-08-14" }, { name: "روان شوقي", date: "2024-09-30" }, { name: "شوقي عماد", date: "2024-10-05" }] },
  { id: 29, name: "كمال عثمان", birthDate: "1953-12-24", deathDate: "2020-04-04", section: "C", graveNumber: 8, visitors: [{   }] },
   
];








// ================================================
// 1) حساب عمر المتوفى وقت الوفاة وإضافته كخاصية age
// ================================================
 
 
//  الاعمار
 
 function addAges(graves) {
  graves.forEach((grave) => {
    const birth = new Date(grave.birthDate);
    const death = new Date(grave.deathDate);

    let age = death.getFullYear() - birth.getFullYear();

    // إذا ما وصل عيد ميلاده بسنة الوفاة، منطرح سنة
    if (
      death.getMonth() < birth.getMonth() ||
      (death.getMonth() === birth.getMonth() && death.getDate() < birth.getDate())
    ) {
      age--;
    }

    grave.age = age;
  });
}

 addAges(graves);

const sorted = [...graves].sort((a, b) => a.age - b.age);

sorted.forEach((grave) => {
  console.log(grave.name + ": " + grave.age);
});

// -----------------------------------------------------------------------

// الاقسام الفارغة

function getEmptyGraves(graves, section) {
  // 1) أرقام القبور المشغولة بهذا القسم
  const occupied = graves
    .filter((grave) => grave.section === section)
    .map((grave) => grave.graveNumber);

  // 2) منمرّ على كل الأرقام، وأي رقم مش مشغول منحطه بالفاضية
  const empty = [];
  for (let num = 1; num <= sectionsCapacity[section]; num++) {
    if (!occupied.includes(num)) {
      empty.push(num);
    }
  }

  return empty;

  
}
 console.log("القسم A:", getEmptyGraves(graves, "A"));
console.log("القسم B:", getEmptyGraves(graves, "B"));
console.log("القسم C:", getEmptyGraves(graves, "C"));




// ------------------------------------------------------------------------------------
// ارجاع عدد المتوفيين في سنة وحدة
function getDeceasedByYear(graves, year) {
  return graves.filter((grave) => {
    const deathYear = new Date(grave.deathDate).getFullYear();
    return deathYear === year;
  });
}

const result = getDeceasedByYear(graves, 2020);

result.forEach((grave) => {
  console.log(grave.name + ": " + grave.deathDate);
});

// ----------------------------------------------------------------------------------------------
 




 // 1) عدد زيارات كل قبر
const counts = graves.map((grave) => grave.visitors.length);

// 2) أعلى عدد وأقل عدد
const maxVisits = Math.max(...counts);
const minVisits = Math.min(...counts);

// 3) طباعة الأكثر زيارة
console.log("الأكثر زيارة (" + maxVisits + " زيارات):");
graves.forEach((grave) => {
  if (grave.visitors.length === maxVisits) {
    console.log("- " + grave.name);
  }
});

// 4) طباعة الأقل زيارة
console.log("الأقل زيارة (" + minVisits + " زيارات):");
graves.forEach((grave) => {
  if (grave.visitors.length === minVisits) {
    console.log("- " + grave.name);
  }
});



// ------------------------------------------------------------------------
// إرجاع الزيارات التي حدثت بين تاريخين، مع اسم الزائر وبيانات القبر

function getVisitsBetween(graves, startDate, endDate) {
  const result = [];

  for (const grave of graves) {
    for (const visit of grave.visitors) {
      if (visit.date >= startDate && visit.date <= endDate) {
        result.push({
          visitor: visit.name,
          date: visit.date,
          deceased: grave.name,
          section: grave.section,
          graveNumber: grave.graveNumber,
        });
      }
    }
  }

  return result;
}

const visits = getVisitsBetween(graves, "2024-03-01", "2024-04-30");
console.log(visits);




