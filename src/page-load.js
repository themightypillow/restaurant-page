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

  const content = document.createElement("div");
  content.appendChild(nav);

  const page = document.querySelector("#content");
  page.appendChild(header);
  page.appendChild(content);
};

export default loadPage;