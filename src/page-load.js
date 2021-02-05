import {homeImg, homeHeadline, homeWiki} from "./info";

const loadPage = () => {
  const header = document.createElement("header");
  const heading = document.createElement("h1");
  heading.textContent = "The Fry Shop";
  header.appendChild(heading);

  const nav = document.createElement("nav");
  const navLink1 = document.createElement("div");
  navLink1.textContent = "Home";
  navLink1.classList.add("active");
  nav.appendChild(navLink1);
  const navLink2 = document.createElement("div");
  navLink2.textContent = "Menu";
  nav.appendChild(navLink2);
  const navLink3 = document.createElement("div");
  navLink3.textContent = "Contact";
  nav.appendChild(navLink3);
  
  const mainImg = document.createElement("img");
  mainImg.src = homeImg;
  mainImg.id = "main-img";
  const blurb = document.createElement("p");
  blurb.textContent = homeHeadline;
  const wiki = document.createElement("p");
  wiki.textContent =  homeWiki;

  const home = document.createElement("div");
  home.id = "home";
  home.appendChild(mainImg);
  home.appendChild(blurb);
  home.appendChild(wiki);

  const content = document.createElement("div");
  content.appendChild(nav);
  content.appendChild(home);

  const page = document.querySelector("#content");
  page.appendChild(header);
  page.appendChild(content);
};

export default loadPage;