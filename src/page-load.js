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

  const body = document.createElement("div");
  body.id = "content-body";
  body.appendChild(nav);

  const content = document.querySelector("#content");
  content.appendChild(header);
  content.appendChild(body);
};

export default loadPage;