    lstFactores = JSON.parse(localStorage.getItem("lstFactores"));
    let tablaResumenFactores = document.getElementById("tabla");
    let cuerpoTabla = document.createElement('tbody');
        lstFactores.forEach(F =>{
            let fila = document.createElement('tr');
    
            let td = document.createElement('td');
            td.innerText = F.Factor;
            fila.appendChild(td);

            td = document.createElement('td');
            td.innerText = F.FactorFinal;
            fila.appendChild(td);
    
            td = document.createElement('td');
            td.innerText = F.PuntajeTotal;
            fila.appendChild(td);
    
            td = document.createElement('td');
            td.innerText = F.Mensaje;
            fila.appendChild(td);
    
            cuerpoTabla.appendChild(fila);
        });
        console.log(cuerpoTabla);
        tablaResumenFactores.appendChild(cuerpoTabla);
