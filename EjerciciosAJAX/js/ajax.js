//Crear el llamado al boton

document.querySelector('#btnLista').addEventListener('click',generaLista)


function generaLista(){
    console.log("Estoy generando la lista")
    //Llamado al archivo Json
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET','catalogo.json',true)
    //Enviar la petición
    xhttp.send();
    //crear una función para mirar el estado de la petición
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
            // Traduccion a un Array (objeto) que se pueda usar en JS
            let data = JSON.parse(this.responseText)
            let rpta = document.querySelector('#rpta')
            rpta.innerHTML = ''
            console.log(data)
            for (let item of data){
                rpta.innerHTML +=`
                    <tr>
                        <td>${item.titulo}</td>
                        <td>${item.artista}</td>
                        <td>${item.año}</td>
                    </tr>
                `
            }
        }
    }
}

//Ejercicio 2

document.querySelector('#btnMusicos').addEventListener('click',generaMusicos)

function generaMusicos(){
    console.log("musicos")
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET','musicos.json',true)
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
            let data = JSON.parse(this.responseText)
            console.log(data)
            let rptamusic = document.querySelector('#rptamusic')
            rptamusic.innerHTML = ''
            console.log(data)
            for (let item of data){
                rptamusic.innerHTML +=`
                    <tr>
                        <td><img src="img/${item.foto}" alt="" width="150"></td>
                        <td>${item.nombre}</td>
                        <td>${item.instrumento}</td>
                        <td>${item.nacimiento}</td>
                    </tr>
                `
            }
        }
    }
}