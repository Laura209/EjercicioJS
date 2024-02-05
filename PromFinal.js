function calcularPromedio() {
  var not1 = parseFloat(document.getElementById("nota1").value);
  var not2 = parseFloat(document.getElementById("nota2").value);
  var not3 = parseFloat(document.getElementById("nota3").value);
  var examen = parseFloat(document.getElementById("examParcial").value);
  var trabFinal = parseFloat(document.getElementById("trabFinal").value);

  if (isNaN(not1) || isNaN(not2) || isNaN(not3) || isNaN(examen) || isNaN(trabFinal)) {
      alert("Los campos no pueden estar vacíos, por favor ingrese las calificaciones.");
  } else {
      if (not1 < 0 || not1 > 50 || not2 < 0 || not2 > 50 || not3 < 0 || not3 > 50 || examen < 0 || examen > 50 || trabFinal < 0 || trabFinal > 50) {
          alert("Los números deben estar en un rango de 0 a 50.");
      } else {
          var promedioParciales = ((not1 + not2 + not3) / 3) * 0.55;
          var promedioExamen = examen * 0.3;
          var promedioTrabajo = trabFinal * 0.15;
          var promedioFinal = promedioParciales + promedioExamen + promedioTrabajo;

          document.getElementById("tablaResultado").style.display = "block";
          document.getElementById("promedioParciales").innerText = promedioParciales.toFixed(2);
          document.getElementById("promedioExamen").innerText = promedioExamen.toFixed(2);
          document.getElementById("promedioTrabajo").innerText = promedioTrabajo.toFixed(2);
          document.getElementById("promedioFinal").innerText = promedioFinal.toFixed(2);

          var estado = "";
          if (promedioFinal >= 30) {
              estado = "Aprobado";
          } else {
            estado = "Reprobado";
          }
          document.getElementById("result").innerText = estado;
     }
  }
}