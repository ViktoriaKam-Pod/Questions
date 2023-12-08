const btn = document.querySelector("#btn");
const par = document.querySelector("#result");

btn.addEventListener("click", userResult);
function userResult (e) {
  e.preventDefault();
  let points = 0;
  if (document.querySelector("#answer_1").checked){
    points++
  }
  if (document.querySelector("#answer_2").checked){
    points++
  }
  if (document.querySelector("#answer_3").checked){
    points++
  }
  if (document.querySelector("#answer_4").checked){
    points++
  }
  if (document.querySelector("#answer_5").checked){
    points++
  }
  par.textContent = "Ваші бали: "+ points;
}