let v1 = 3;
let v2 = 4;
alert("3 times 4 " + "equals " + (v1 * v2)); // change equals to a string and put parantheses around v1 * v2

// This sets the general styling for the divs within the section tag using .style
let section = document.getElementById("s1"); // changed getElementsById to getElementById
section.style.width = "50%";
section.style.textAlign = "center";
section.style.fontFamily = "arial, serif";
section.style.fontWeight = "bold"; // fixed typo
section.style.fontStyle = "italic";
section.style.fontSize = "20px";

// Sets the customization for each individual color/div tag
//.innerHTML is used to add content within each div tag.
//.style.backgroundColor is used to assign a different background color to each div

// RED
const red = document.getElementById("red"); // changed getelementById to getElementById
red.innerHTML = "RED";
red.style.backgroundColor = "red";

// ORANGE
const orange = document.getElementById("orange");
orange.innerHTML = "ORANGE"; // changed innerhtml to innerHTML
orange.style.backgroundColor = "orange";

// YELLOW
const yellow = document.getElementById("yellow");
yellow.innerHTML = "YELLOW";
yellow.style.backgroundColor = "yellow";

// GREEN
const green = document.getElementById("green"); // change var name from violent to green
green.innerHTML = "GREEN"; 
green.style.backgroundColor = "green";

// INDIGO
const indigo = document.getElementById("indigo");
indigo.innerHTML = "INDIGO";
indigo.style.backgroundColor = "indigo";

// PURPLE
const violet = document.getElementById("violet");
violet.innerHTML = "VIOLET";
violet.style.backgroundColor = "violet";