const botonSwal = document.getElementById("btnMostrarSwal");

botonSwal.onclick = mostrarSwal;

function mostrarSwal() {
  Swal.fire({
    icon: "success",
    title: "Mensaje mostrado",
  });
}

const botonToast = document.getElementById("btnMostrarToast");

botonToast.onclick = mostrarToast;
function mostrarToast() {
  Toastify({
    text: "Mostrar toast",
    duration: 3000,
    close: true,
  }).showToast();
}
