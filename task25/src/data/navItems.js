 
export const navItems = [
  { id: "home", name: "الرئيسية", link: "#home", children: [] },
  {
    id: "services",
    name: "خدماتنا",
    link: "#services",
    children: [
      { id: "web", name: "تصميم مواقع", link: "#web" },
      { id: "mobile", name: "تطبيقات موبايل", link: "#mobile" },
      { id: "seo", name: "تحسين محركات البحث", link: "#seo" },
    ],
  },
  {
    id: "about",
    name: "من نحن",
    link: "#about",
    children: [
      { id: "team", name: "فريق العمل", link: "#team" },
      { id: "story", name: "قصتنا", link: "#story" },
    ],
  },
  { id: "contact", name: "تواصل معنا", link: "#contact", children: [] },
];