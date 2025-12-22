import guias from "../data/guias.js";

///--------------------------------------------------------
// SAVE IN LOCAL STORAGE AND RENDER GUIAS
///--------------------------------------------------------
renderInitialGuias();
function saveGuias() {
  // Save initial guias to local storage if not already present
  localStorage.setItem("guiasLocalStorage", JSON.stringify(guias));
}

function retrieveGuias() {
  // Load guias from local storage
  return JSON.parse(localStorage.getItem("guiasLocalStorage"));
}

function renderInitialGuias() {
  const guiasFromLocalStorage = retrieveGuias();
  const table = document.querySelector(".section-list__table");
  if (guiasFromLocalStorage && guiasFromLocalStorage.length > 0) {
    guiasFromLocalStorage.forEach((guia) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${guia.Numero_de_Guia}</td>
      <td>${guia.Origen}</td>
      <td>${guia.Destino}</td>
      <td>${guia.Destinatario}</td>
      <td>${guia.Estado}</td>
    `;
      table.appendChild(row);
    });
  } else {
    saveGuias();
    renderInitialGuias();
  }
}

function updateGuiasTable(newGuia) {
  const guiasFromLocalStorage = retrieveGuias();
  guiasFromLocalStorage.push(newGuia);
  localStorage.setItem(
    "guiasLocalStorage",
    JSON.stringify(guiasFromLocalStorage)
  );
}
///--------------------------------------------------------
// FORM FILLING FUNCTIONALITY
///--------------------------------------------------------
const form = document.querySelector(".section-form__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numeroDeGuia = document.getElementById("numero-de-guia").value;
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const destinatario = document.getElementById("destinatario").value;
  const estado = document.getElementById("estado").value;
  console.log("doing addGuides");
  console.log("numero de Guia", numeroDeGuia);

  //
  const guide = {
    Numero_de_Guia: numeroDeGuia,
    Origen: origen,
    Destino: destino,
    Destinatario: destinatario,
    Estado: estado,
  };
  console.log("guide", guide);

  updateGuiasTable(guide);
  retrieveGuias();
  form.reset();
  console.log("guias", guias);
});
