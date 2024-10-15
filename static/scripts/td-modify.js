const td0 = document.createElement("td");
td0.setAttribute("align", "center");
td0.textContent = contact.id;
row.appendChild(td0);

const td1 = document.createElement("td");
td1.setAttribute("align", "left");
td1.textContent = contact.name;
row.appendChild(td1);

const td2 = document.createElement("td");
td2.setAttribute("align", "left");
td2.textContent = contact.email;
row.appendChild(td2);

const td3 = document.createElement("td");
td3.setAttribute("align", "left");
td3.textContent = contact.phone;
row.appendChild(td3);