const url = "http://localhost:3000";
const myForm = document.querySelector("#my-form");
let activity;
let timeOfDay

myForm.addEventListener("submit", returnReverse);

function returnReverse (e) {
  e.preventDefault();

  const form = e.target;
  activity = form.doing.value;
  timeOfDay = form.daytime.value;

  fetch(`http://localhost:3000/${activity}/${timeOfDay}`)//, options)
    .then(response => response.json())
    .then(addInput)
    .then(console.log)
    .catch(console.warn);
};

function addInput(reversed) {
  myForm.insertAdjacentHTML('afterend', `<p>${reversed}</p>`)
}
