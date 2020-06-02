const name = "Agnieszka";
const age = 25;

console.log(name);
console.log(age);

console.log(`nazywam się ${name} i mam ${age} lat.`);

const heading = document.querySelector(".herader-h2--js");

console.log(heading);

const play = document.querySelector(".zabawa-JS--js");

play.innerHTML = `
<h4>Zakup klatki</h4>
Wimiary minimum 80cm, przy małych króliczku.  <br/>
Najlepiej sprawdza się kojec. <br> `;
