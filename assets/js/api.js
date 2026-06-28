async function buscarPais() {
  try {
    const input = document.getElementById("pais").value.trim();

    if (!input) {
      mostrar("Escribe un país");
      return;
    }

    // Países con ISO (IMPORTANTE)
    const res = await fetch(
      "https://countriesnow.space/api/v0.1/countries/iso",
    );
    const data = await res.json();

    const pais = data.data.find(
      (p) => p.name.toLowerCase() === input.toLowerCase(),
    );

    if (!pais) {
      mostrar("País no encontrado");
      return;
    }

    // Ciudades (otra API)
    const res2 = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data2 = await res2.json();

    const infoPais = data2.data.find(
      (p) => p.country.toLowerCase() === input.toLowerCase(),
    );

    //Bandera REAL (ISO correcto)
    const bandera = `https://flagcdn.com/w320/${pais.Iso2.toLowerCase()}.png`;

    // Ciudades
    const ciudades = infoPais?.cities || [];

    const ciudadesHTML = ciudades.map((c) => `<li>${c}</li>`).join("");

    document.getElementById("resultado").innerHTML = `
      <h2>${pais.name}</h2>

      <img src="${bandera}" width="160">

      <p><strong>ISO:</strong> ${pais.Iso2}</p>

      <h3>Ciudades (${ciudades.length})</h3>

      <ul>${ciudadesHTML}</ul>
    `;
  } catch (err) {
    console.error(err);
    mostrar("Error al consumir APIs");
  }
}

function mostrar(msg) {
  document.getElementById("resultado").innerHTML = `<h3>${msg}</h3>`;
}
