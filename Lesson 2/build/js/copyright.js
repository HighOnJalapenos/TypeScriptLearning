"use strict";
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("dateTime", thisYear);
// year.textContent = thisYear;
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;
