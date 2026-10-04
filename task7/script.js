const articles = [
  { id: 1, title: "المقال الأول", content: "بببببببببببببببببببببببببب", image: "img1.jpg" },
  { id: 2, title: "المقال الثاني", content: "سسسسسسسسسسسسسسسسسسسسسس", image: "" },
  { id: 3, title: "المقال الثالث", content: "للللللللللللللللللللل", image: "img3.jpg" }
];


articles.forEach(function (article) {
 

   if (article.image != "") {
    console.log("الصورة: " + article.image);
  }

  else {
    console.log("لا يوجد صورة");
  }

});