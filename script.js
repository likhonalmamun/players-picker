const ul = document.getElementById("choosen-list").childNodes;
const buttons = document.getElementsByClassName("btn-select");
document.getElementById("calculate-total").setAttribute("disabled", true);
for (let button of buttons) {
  button.addEventListener("click", function () {
    if (ul.length > 4) {
      alert("you have alredy choosen 5 players");
      return;
    }
    button.innerText = "SELECTED";
    button.setAttribute("disabled", true);
    let div = button.parentElement;
    let nameElement = div.querySelector("h2");
    let name = nameElement.innerText;
    addToList(name);
  });
}

// adding player inteructions completed
document.getElementById("calculate").addEventListener("click", function () {
  let playerExpence = ul.length * getInputValue("per-player");
  console.log(playerExpence);
  if (isNaN(playerExpence)) {
    alert("Please enter a valid amount");
    clearInputs();
    return;
  } else {
    document.getElementById("player-expenses").innerText = playerExpence;
    document.getElementById("calculate-total").removeAttribute("disabled");
  }
});
// per player calculation  done
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    let playerExpence = getTextValue("player-expenses");
    let managerExpence = getInputValue("manager");
    let coachExpence = getInputValue("coach");
    let totalExpence = playerExpence + managerExpence + coachExpence;
    clearInputs();
    if (isNaN(totalExpence)) {
      alert("Please enter a valid amount");
      return;
    } else {
      document.getElementById("total").innerText = totalExpence;
    }
  });
  // total expence calculation done 
