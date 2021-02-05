import {homeImg, homeHeadline, homeWiki} from "./data";

const loadHome = () => {
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

  const body = document.querySelector("#content-body");
  body.appendChild(home);
};

export default loadHome;