import loadPage from "./page-load";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const load = {
  active: "home",
  home: loadHome,
  menu: loadMenu,
  contact: loadContact
};

loadPage();
load.home();

document.querySelector("nav").childNodes.forEach(tab => 
  tab.addEventListener("click", e => {
    const body = document.querySelector("#content-body");
    body.removeChild(body.lastChild);
    document.querySelector(`#${load.active}-tab`).classList.remove("active");
    const newActive = e.target.textContent.toLowerCase();
    load[newActive]();
    document.querySelector(`#${newActive}-tab`).classList.add("active");
    load.active = newActive;
}));