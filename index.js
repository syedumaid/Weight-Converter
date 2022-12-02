let input = document.getElementById("lbsInput");
let output = document.getElementById("output");

input.addEventListener("input", function(e){
  
  let lbs = e.target.value;
  let gramsOutput = document.getElementById("gramsOutput");
  let kgOutput = document.getElementById("kgOutput");
  let ozOutput = document.getElementById("ozOutput");
  
  gramsOutput.innerHTML = lbs/0.0022046;
  kgOutput.innerHTML = lbs/2.2046;
  ozOutput.innerHTML = lbs*16;
});