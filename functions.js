function addToList(name) {
  let li = document.createElement("li");
  li.innerText = name;
  document.getElementById("choosen-list").appendChild(li);
}
function getInputValue(id) {
  let valueStr = document.getElementById(id).value;
  let value = parseFloat(valueStr);
  return value;
}
function getTextValue(idName) {
  let valueStr = document.getElementById(idName).innerText;
  let value = parseFloat(valueStr);
  return value;
}
function clearInputs() {
  document.getElementById("per-player").value = "";
  document.getElementById("manager").value = "";
  document.getElementById("coach").value = "";
}
