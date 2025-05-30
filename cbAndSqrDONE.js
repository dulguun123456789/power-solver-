function solveSquare() {
  let num = document.getElementById("squareInput").value;
  let square = num * num;
  document.getElementById("squareResult").textContent = num + "² = " + square;
}

function solveCube() {
  let num = document.getElementById("cubeInput").value;
  let cube = num * num * num;
  document.getElementById("cubeResult").textContent = num + "³ = " + cube;
}
