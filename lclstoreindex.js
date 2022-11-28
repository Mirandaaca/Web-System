function guardarDatos() {
    localStorage.nombreDocente = document.getElementById("nombreDocente").value;
    localStorage.apellidoDocente = document.getElementById("apellidoDocente").value;
    localStorage.emailDocente = document.getElementById("emailDocente").value;
    localStorage.profesionDocente = document.getElementById("profesionDocente").value;
    localStorage.nombreEstudiante = document.getElementById("nombreEstudiante").value;
    localStorage.apellidoEstudiante = document.getElementById("apellidoEstudiante").value;
    localStorage.emailEstudiante = document.getElementById("emailEstudiante").value;
}
function recuperarDatos() {
    if ((localStorage.nombreDocente != undefined) && (localStorage.apellidoDocente != undefined) && (localStorage.emailDocente != undefined) && (localStorage.profesionDocente != undefined) && (localStorage.nombreEstudiante != undefined) && (localStorage.apellidoEstudiante != undefined) && (localStorage.emailEstudiante != undefined)){
        document.getElementById("nombreDocente").value = localStorage.nombreDocente;
        document.getElementById("apellidoDocente").value = localStorage.apellidoDocente;
        document.getElementById("emailDocente").value = localStorage.emailDocente;
        document.getElementById("profesionDocente").value = localStorage.profesionDocente;
        document.getElementById("nombreEstudiante").value = localStorage.nombreEstudiante;
        document.getElementById("apellidoEstudiante").value = localStorage.apellidoEstudiante;
        document.getElementById("emailEstudiante").value = localStorage.emailEstudiante;

    } else {
       console.log("No hay nada en el STORAGE");
    }
}
