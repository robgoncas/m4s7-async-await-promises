
//Función que realiza una consulta a una API pública
//devuelve una promesa
function consultarAPI(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = () => {
            if (xhr.status === 200) {
                //Resuelve la promesa si la solicitud fue exitosa
                resolve(JSON.parse(xhr.responseText));
            } else {
                //Rechaza la promesa si hubo un error
                reject(`Error: ${xhr.status}`);
            }
        };

        xhr.onerror = () => reject('Error de red');

        //Envía la solicitud
        xhr.send();
    });
}

//Función para consultar una API
function obtenerIndicadores() {
    let url = 'https://mindicador.cl/api'; 

    consultarAPI(url)
        .then(data => {
            console.log('Datos obtenidos:', data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

//Función async/await para consultar la UF actual en Chile
async function obtenerUF() {
    let url = 'https://mindicador.cl/api/uf';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("data");
        console.log(data);


        const ufActual = data.serie[0].valor;

        console.log(`La UF actual es: ${ufActual}`);
    } catch (error) {
        console.error('Error al obtener la UF:', error);
    }
}

//Llamadas a las funciones
obtenerIndicadores();
obtenerUF();

