function calcularEj1() {
  const z = parseFloat(document.getElementById("z").value);
  const a = 0.4 * z**4 + 3.1 * z**2 - 162.3 * z - 80.7;
  const b = (z**3 - 23) / Math.cbrt(z**2 + 17.5);
  document.getElementById("resultado1").innerHTML = `
    (a) Resultado: ${a.toFixed(4)}<br>
    (b) Resultado: ${b.toFixed(4)}
  `;
}

function calcularEj2() {
  const t = parseFloat(document.getElementById("t").value);
  const a = 0.5 * Math.exp(2 * t) - 3.81 * t**3;
  const b = (6 * t**2 + 6 * t - 2) / (t**2 - 1);
  document.getElementById("resultado2").innerHTML = `
    (a) Resultado: ${a.toFixed(4)}<br>
    (b) Resultado: ${b.toFixed(4)}
  `;
}

function calcularEj3() {
  const x = parseFloat(document.getElementById("x").value);
  const y = parseFloat(document.getElementById("y").value);
  const a = (x**2 + y**2) ** 1.5 + (x * y) / (y - x);
  const b = Math.sqrt(x + y) / ((x - y)**2) + 2 * x**2 - x * y**2;
  document.getElementById("resultado3").innerHTML = `
    (a) Resultado: ${a.toFixed(4)}<br>
    (b) Resultado: ${b.toFixed(4)}
  `;
}

function calcularEj4() {
  const c = parseFloat(document.getElementById("c").value);
  const d = parseFloat(document.getElementById("d").value);
  const t = parseFloat(document.getElementById("t4").value);
  const a = c * d**2;
  const b = (c + a) / (c - d);
  const ct = c * t;

  const resA = Math.exp(d - b) + Math.cbrt(c + a) - (c * a)**d;
  const resB = (d / c) + (ct / b)**2 - c**4 - (a / b);

  document.getElementById("resultado4").innerHTML = `
    (a) Resultado: ${resA.toFixed(4)}<br>
    (b) Resultado: ${resB.toFixed(4)}
  `;
}

function calcularEj5() {
  const x = parseFloat(document.getElementById("xTrig").value);
  const lhsA = Math.cos(x)**2 - Math.sin(x)**2;
  const rhsA = 1 - 2 * Math.sin(x)**2;
  const validA = Math.abs(lhsA - rhsA) < 0.001;

  const lhsB = Math.tan(x) / (Math.sin(x) - 2 * Math.tan(x));
  const rhsB = 1 / (Math.cos(x) - 2);
  const validB = Math.abs(lhsB - rhsB) < 0.001;

  document.getElementById("resultado5").innerHTML = `
    (a) Lado Izquierdo: ${lhsA.toFixed(4)}<br>
    (a) Lado Derecho: ${rhsA.toFixed(4)}<br>
    ${validA ? '✅ Identidad verificada' : '❌ No se cumple'}<br><br>

    (b) Lado Izquierdo: ${lhsB.toFixed(4)}<br>
    (b) Lado Derecho: ${rhsB.toFixed(4)}<br>
    ${validB ? '✅ Identidad verificada' : '❌ No se cumple'}
  `;
}
