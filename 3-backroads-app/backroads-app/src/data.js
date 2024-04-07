import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";
// import img5 from "./images/tour-5.jpeg";
// import img6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",

    icon_className: "fab fa-facebook",
  },

  {
    id: 2,
    href: "https://www.twitter.com",

    icon_className: "fab fa-twitter",
  },

  {
    id: 3,
    href: "https://www.twitter.com",

    icon_className: "fab fa-squarespace",
  },
];

export const services_data = [
  {
    id: 1,
    service_icon: "fas fa-wallet fa-fw",
    service_title: "saving money",
    service_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    service_icon: "fas fa-tree fa-fw",
    service_title: "endless hiking",
    service_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    service_icon: "fas fa-socks fa-fw",
    service_title: "amazing comfort",
    service_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tour_data = [
  {
    id: 1,
    img: img1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    location: "china",
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    img: img2,
    date: "october 1th, 2020",
    title: "best of java",
    location: "indonesia",
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    img: img3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    location: "kenya highlights",
    days: 8,
    price: 5000,
  },
  {
    id: 4,
    img: img4,
    date: "december 5th, 20190",
    title: "explore hong kong",
    location: "kenya",
    days: 28,
    price: 3300,
  },
];
export default pageLinks;
