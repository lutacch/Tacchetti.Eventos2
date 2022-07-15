let trigoIngresado = "";
let inputTrigo = document.getElementById("input-trigo");

let centenoIngresado = "";
let inputCenteno = document.getElementById("input-centeno");

let avenaIngresado = "";
let inputAvena = document.getElementById("input-avena");

let botonTrigo = document.getElementById("btnA");
let botonCenteno = document.getElementById("btnB");
let botonAvena = document.getElementById("btnC");

inputTrigo.addEventListener("input", () => {
  trigoIngresado = inputTrigo.value;
});

inputCenteno.addEventListener("input", () => {
  centenoIngresado = inputCenteno.value;
});

inputAvena.addEventListener("input", () => {
  avenaIngresado = inputAvena.value;
});

let cupTrigo = 140;
let cupCenteno = 104;
let cupAvena = 90;

botonTrigo.addEventListener("click", () => {
  function dividirTrigo() {
    resultadoTrigo = Number(trigoIngresado) / cupTrigo;
  }
  dividirTrigo();
  alert(
    "Tu conversion de gramos de Trigo a Tazas es igual a: " + resultadoTrigo
  );
});

botonCenteno.addEventListener("click", () => {
  function dividirCenteno() {
    resultadoCenteno = Number(centenoIngresado) / cupCenteno;
  }
  dividirCenteno();
  alert(
    "Tu conversion de gramos de Centeno a Tazas es igual a: " + resultadoCenteno
  );
});

botonAvena.addEventListener("click", () => {
  function dividirAvena() {
    resultadoAvena = Number(avenaIngresado) / cupAvena;
  }
  dividirAvena();
  alert(
    "Tu conversion de gramos de Avena a Tazas es igual a: " + resultadoAvena
  );
});

let mililitrosIngresados = "";
let inputMililitros = document.getElementById("input-mililitros");
inputMililitros.addEventListener("input", () => {
  mililitrosIngresados = inputMililitros.value;
});

let boton2 = document.getElementById("btnSecundario");
let cup2 = 250;
boton2.addEventListener("click", () => {
  function dividirMililitros() {
    resultado2 = Number(mililitrosIngresados) / cup2;
  }
  dividirMililitros();
  alert("Tu conversion de mililitros a Tazas es igual a: " + resultado2);
});
