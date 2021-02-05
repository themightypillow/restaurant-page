const loadPage = () => {
  const header = document.createElement("header");
  const heading = document.createElement("h1");
  heading.textContent = "The Fry Shop";
  header.appendChild(heading);

  const homeTab = document.createElement("div");
  homeTab.textContent = "Home";
  homeTab.id = "home-tab";
  homeTab.classList.add("active");
  
  const menuTab = document.createElement("div");
  menuTab.textContent = "Menu";
  menuTab.id = "menu-tab";
  
  const contactTab = document.createElement("div");
  contactTab.textContent = "Contact";
  contactTab.id = "contact-tab";

  const nav = document.createElement("nav");
  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);

  const body = document.createElement("div");
  body.id = "content-body";
  body.appendChild(nav);

  const content = document.querySelector("#content");
  content.appendChild(header);
  content.appendChild(body);
};

export default loadPage;