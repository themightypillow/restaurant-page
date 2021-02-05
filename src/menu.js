import {menuItems} from "./data";

const loadMenu = () => {
  const menu = document.createElement("div");
  menu.id = "menu";

  menuItems.forEach(item => {
    const img = document.createElement("img");
    img.classList.add("menu-img");
    img.src = item.url;

    const name = document.createElement("h3");
    name.textContent = item.name;
    const price = document.createElement("p");
    price.textContent = item.price;

    const info = document.createElement("div");
    info.appendChild(name);
    info.appendChild(price);

    const menuItem = document.createElement("div");
    menuItem.appendChild(img);
    menuItem.appendChild(info);

    menu.appendChild(menuItem);
  });

  const body = document.querySelector("#content-body");
  body.appendChild(menu);
};

export default loadMenu;