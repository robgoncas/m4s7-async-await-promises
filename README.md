
# Promesas en JavaScript

Las **promesas** son una característica fundamental de JavaScript que se utiliza para manejar operaciones asincrónicas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

## ¿Por qué usar Promesas?

- **Manejo de asincronía**: Las promesas facilitan la gestión de tareas que toman tiempo en completarse, como solicitudes HTTP, temporizadores, o lecturas de archivos.
- **Evitar el callback hell**: Permiten evitar la anidación excesiva de funciones callback, proporcionando una estructura más limpia y manejable.
- **Control de errores**: Las promesas simplifican el manejo de errores en el código asincrónico.

## Estados de una Promesa

- **Pending (pendiente)**: Estado inicial, ni cumplido ni rechazado.
- **Fulfilled (cumplido)**: La operación se completó con éxito.
- **Rejected (rechazado)**: La operación falló.

## Métodos Principales

- **`resolve(value)`**: Marca la promesa como cumplida y devuelve el valor.
- **`reject(reason)`**: Marca la promesa como rechazada y devuelve una razón (error).

## Ejemplo 1: Creando una Promesa con `resolve` y `reject`

```javascript
//ECMAScript 5 (ES5) usando Promesas con then/catch
function obtenerDatos() {
    return new Promise(function(resolve, reject) {
        //Simulando una operación asincrónica
        var exito = true;

        if (exito) {
            resolve('Datos obtenidos correctamente.');
        } else {
            reject('Error al obtener los datos.');
        }
    });
}

obtenerDatos().then(function(mensaje) {
        //Si la promesa se resuelve exitosamente
        console.log(mensaje);
    }).catch(function(error) {
        //Si la promesa es rechazada
        console.error(error);
    });

//Versión ECMAScript 6 (ES6) usando Promesas con funciones flecha
const obtenerDatosES6 = () => {
    return new Promise((resolve, reject) => {
        //Simulando una operación asincrónica
        const exito = true; //Cambiar a false para ver el rechazo

        if (exito) {
            resolve('Datos obtenidos correctamente.');
        } else {
            reject('Error al obtener los datos.');
        }
    });
};

obtenerDatosES6()
    .then(mensaje => {
        //Si la promesa se resuelve exitosamente
        console.log(mensaje);
    })
    .then(mensaje => {
        //Si la promesa se resuelve exitosamente
        console.log(mensaje);
    })
    .then(mensaje => {
        //Si la promesa se resuelve exitosamente
        console.log(mensaje);
    })
    .catch(error => {
        //Si la promesa es rechazada
        console.error(error);
    });
```

## Ejemplo 2: Usando Promesas con `try/catch`

### Con `async/await` y `try/catch`

```javascript
//ECMAScript 6 (ES6) usando Promesas con async/await y try/catch
async function procesarDatos() {
    try {
        const mensaje = await obtenerDatosES6();
        //Si la promesa se resuelve exitosamente
        console.log(mensaje);
    } catch (error) {
        //Si la promesa es rechazada
        console.error(error);
    }
}

procesarDatos();
```

## Comparación entre `then/catch` y `try/catch`

- **`then/catch`**:
  - Es el enfoque tradicional para manejar promesas.
  - Permite encadenar múltiples operaciones asincrónicas.
  
- **`try/catch`** con `async/await`:
  - Simplifica el manejo de promesas.
  - Hace que el código sea más secuencial y fácil de leer.

---

```javascript









```



# Funciones `async/await` en JavaScript

## Introducción

Las funciones `async/await` se introdujeron en ECMAScript 2017 (ES8) y proporcionan una forma más sencilla y legible de manejar código asincrónico en JavaScript, eliminando la necesidad de usar promesas encadenadas con `.then()` y `.catch()`.

### ¿Por qué usar `async/await`?

- **Legibilidad**: El código asincrónico con `async/await` se parece más al código síncrono, lo que facilita la lectura y comprensión.
- **Manejo de Errores**: El uso de `try/catch` para manejar errores en funciones `async` es más intuitivo que manejar errores en promesas con `.catch()`.
- **Depuración**: Es más fácil depurar código que usa `async/await` debido a la estructura lineal del código.

### ¿En qué casos utilizarlas?

- **Solicitudes HTTP**: Cuando se realizan múltiples solicitudes HTTP que dependen unas de otras.
- **Operaciones Asincrónicas en Serie**: Cuando una operación debe esperar a que otra se complete antes de continuar.
- **Manejo de Datos en Tiempo Real**: Al trabajar con datos que llegan en tiempo real desde APIs o servicios externos.

## Sintaxis de `async/await`

### Funciones `async`

Una función declarada con la palabra clave `async` devuelve una promesa y puede contener expresiones `await`.

```javascript
async function ejemploAsync() {
    return "Resultado";
}

//Esto es equivalente a:
function ejemploAsync() {
    return Promise.resolve("Resultado");
}
```

### Expresiones `await`

La palabra clave `await` hace que JavaScript espere hasta que la promesa se resuelva o rechace. Solo se puede usar dentro de funciones `async`.

```javascript
async function obtenerDatos() {
    let datos = await fetch('https://api.example.com/data');
    return datos.json();
}
```

## Ejemplos de Código

### Ejemplo 1: ECMAScript 5 (ES5)

```javascript
//Declarando una función asincrónica con una función tradicional en ES5
async function obtenerUsuario() {
    try {
        //Esperar la respuesta de una llamada a una API
        var respuesta = await fetch('https://api.example.com/usuario');
        //Procesar los datos como JSON
        var datos = await respuesta.json();
        console.log('Datos del usuario:', datos);
    } catch (error) {
        console.error('Error al obtener usuario:', error);
    }
}

obtenerUsuario();
```

### Ejemplo 2: ECMAScript 6 (ES6) con Funciones Flecha

```javascript
//Declarando una función asincrónica usando una función flecha en ES6
const obtenerProducto = async () => {
    try {
        //Esperar la respuesta de una llamada a una API
        const respuesta = await fetch('https://api.example.com/producto');
        //Procesar los datos como JSON
        const datos = await respuesta.json();
        console.log('Datos del producto:', datos);
    } catch (error) {
        console.error('Error al obtener producto:', error);
    }
};

obtenerProducto();
```
