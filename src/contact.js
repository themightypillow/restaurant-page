import {contactInfo} from "./data";

const loadContact = () => {
  const addressHeader = document.createElement("h2");
  addressHeader.textContent = "Address" ;
  const address = document.createElement("p");
  address.textContent = contactInfo.address;

  const phoneHeader = document.createElement("h2");
  phoneHeader.textContent = "Phone" ;
  const phone = document.createElement("p");
  phone.textContent = contactInfo.phone;

  const emailHeader = document.createElement("h2");
  emailHeader.textContent = "Email" ;
  const email = document.createElement("p");
  email.textContent = contactInfo.email;

  const info1 = document.createElement("div");
  info1.appendChild(addressHeader);
  info1.appendChild(address);
  info1.appendChild(phoneHeader);
  info1.appendChild(phone);
  info1.appendChild(emailHeader);
  info1.appendChild(email);

  const hoursHeader = document.createElement("h2");
  hoursHeader.textContent = "Hours";

  const weekHeader = document.createElement("h3");
  weekHeader.textContent = "Mon - Thu";
  const weekHours = document.createElement("p");
  weekHours.textContent = contactInfo.hours.week;

  const weekendHeader = document.createElement("h3");
  weekendHeader.textContent = "Fri - Sun";
  const weekendHours = document.createElement("p");
  weekendHours.textContent = contactInfo.hours.weekend;

  const info2 = document.createElement("div");
  info2.appendChild(hoursHeader);
  info2.appendChild(weekHeader);
  info2.appendChild(weekHours);
  info2.appendChild(weekendHeader);
  info2.appendChild(weekendHours);

  const contact = document.createElement("div");
  contact.id = "contact";
  contact.appendChild(info1);
  contact.appendChild(info2);

  const body = document.querySelector("#content-body");
  body.appendChild(contact);
};

export default loadContact;