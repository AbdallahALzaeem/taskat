const product = [
  { name: "colaa", price: 2.5, evaluation: "5" },
   
    { name: "shoklate", price: 3, evaluation: "2.5" },
  { name: "ahips", price: 3, evaluation: "2.8" },
  { name: "rite", price: 2.5, evaluation: "4" },

];


product.forEach((item) => {
  const rating = Number(item.evaluation);

  if (rating > 3) {
    const stars = "⭐".repeat(Math.round(rating));
    console.log(item.name + " " + stars);
  }
});