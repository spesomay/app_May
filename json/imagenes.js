function pintarDatos(coso){
    let nombreResto = coso;
    alert(`El nombre del resto es: ${nombreResto}`);

    fetch('json/cafe.json')
    .then(response => {
        return response.json();
    })
    .then(cate => {
        alert('Entró');
        for(let x = 0; x < cate.length; x++){
            if(cate[x].nombre === nombreResto){

                let pimba = cate[x].img
                
               
                break; // salir del bucle una vez encontrado el nombre
            }
        }

        localStorage.setItem("img", pimba);
        alert(localStorage.setItem("img"))
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
}
