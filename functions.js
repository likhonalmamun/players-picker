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


{/* <div
class="card w-[fit-content] h-[350px] text-center rounded-md bg-black border-2 border-[#434141]"
>
  <img class="w-[250px] rounded-sm" src="images/player7.png" alt="" />
  <h2 class="text-white text-2xl my-3 font-semibold">
    Cristiano Ronaldo
  </h2>
  <p class="text-[#626262] text-md">Click select button to Choose</p>
  <button
    class="text-white btn-select bg-blue-800 hover:bg-blue-700 disabled:bg-[#333333] px-[65px] text-md py-2 my-5"
  >
    SELECT
  </button>
</div>
<div
  class="card w-[fit-content] h-[350px] text-center rounded-md bg-black border-2 border-[#434141]"
>
  <img class="w-[250px] rounded-sm" src="images/player8.png" alt="" />
  <h2 class="text-white text-2xl my-3 font-semibold">Pelé</h2>
  <p class="text-[#626262] text-md">Click select button to Choose</p>
  <button
    class="text-white btn-select bg-blue-800 hover:bg-blue-700 disabled:bg-[#333333] px-[65px] text-md py-2 my-5"
  >
    SELECT
  </button>
</div><div
          class="card w-[fit-content] h-[350px] text-center rounded-md bg-black border-2 border-[#434141]"
        >
          <img class="w-[250px] rounded-sm" src="images/player7.png" alt="" />
          <h2 class="text-white text-2xl my-3 font-semibold">
            Cristiano Ronaldo
          </h2>
          <p class="text-[#626262] text-md">Click select button to Choose</p>
          <button
            class="text-white btn-select bg-blue-800 hover:bg-blue-700 disabled:bg-[#333333] px-[65px] text-md py-2 my-5"
          >
            SELECT
          </button>
        </div>
        <div
          class="card w-[fit-content] h-[350px] text-center rounded-md bg-black border-2 border-[#434141]"
        >
          <img class="w-[250px] rounded-sm" src="images/player8.png" alt="" />
          <h2 class="text-white text-2xl my-3 font-semibold">Pelé</h2>
          <p class="text-[#626262] text-md">Click select button to Choose</p>
          <button
            class="text-white btn-select bg-blue-800 hover:bg-blue-700 disabled:bg-[#333333] px-[65px] text-md py-2 my-5"
          >
            SELECT
          </button>
        </div>  */}
       