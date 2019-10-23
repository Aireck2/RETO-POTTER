# Proyecto Potter


En este proyecto **construirás una _página web_ para visualizar un _conjunto (set) de datos_ de los personajes del mundo de Harry Potter**.

## Consideraciones generales del proyecto
.

* Este proyecto se debe resolver de manera de dupla bajo la **planificación Agile**, y utilizando **Trello**.


* Te daremos las historias de usuario con el fin de presentarte los requerimientos y funcionalidades que desea el usuario final.

* Debes planificarte usando las definiciones de terminado y los criterios de aceptación por cada historia de usuario. Esto te ayudará a determinar **qué hacer** en el sprint y **cómo se realizará**.

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que afiances tu aprendizaje practicando la planificación *Agile* utilizando *Scrum* con el fin de que logres, en el tiempo indicado, implementar una interfaz web donde se pueda visualizar y manipular data de los personajes del mundo de Harry Potter utilizando arreglos y objetos con JavaScript.

Dicho en palabras sencillas, aprenderás:

### A nivel de planificación

* Escribir y trabajar las Definiciones de terminado (_definition of done_) y Criterios de Aceptación por cada historia de usuario como herramienta central de la organización y planificación de tu trabajo.

### A nivel de HTML

* Utilizar etiquetas semánticas de HTML5.
* Validar que tu marcado HTML esté correctamente implementado a través del [validador de html](https://validator.w3.org/).

### A nivel de CSS3

* Apliques y refuerces los conceptos base de CSS3 tales como: modelo de cajas, posicionamiento (float, absolute, relative, fixed), etc.
* Implementar selectores de clase evitando la redundancia de reglas de estilo en CSS3.
* Utilizar `media-queries` para lograr un diseño responsivo `mobile first`.
* Que puedas implementar un sistema de grillas básico que te permita crear un diseño adaptativo para **mobile, tablet y desktop**

### A nivel de JavaScript

* Cargar la data de un archivo **.json** con **fetch**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario (mostrar, filtrar, ordenar, ...).
* **Implementar y comprender la importancia de escribir tests en tu proyecto utilizando jest**.

## Consideraciones técnicas a tomar en cuenta

### Visualmente (HTML5 y CSS3)

Para este proyecto te daremos un layout (diseño) el cual deberás replicar de manera exacta utilizando **HTML5** y **CSS3**.

Para los colores, lo dejamos a tu imaginación y como fuente te sugerimos utilizar *Roboto*, *Monserrat* u *Open Sans*

* Diseño *mobile*

 ![diseño mobile](https://user-images.githubusercontent.com/25906896/56050330-3403c400-5d11-11e9-8e8b-ab479ca1054b.png).

* Diseño *desktop*

![diseño desktop](https://user-images.githubusercontent.com/25906896/56048432-22b8b880-5d0d-11e9-807c-e7e74c19e39c.png).

 A continuación describimos los archivos que utilizarás.

#### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`, en este archivo va la página que se mostrará al usuario y donde utilizando etiquetas semánticas de HTML5 replicarás el diseño propuesto para este proyecto.

#### `src/style.css`

Aquí escribirás todas las reglas de estilo, tus selectores de clases, definirás tus media-queries de manera que puedas lograr que tu proyecto se vea hermoso como el diseño propuesto.
**No está permitido el uso de frameworks de CSS3 (Bootstrap), realmente queremos que refuerces las bases en CSS3 con este proyecto**

### Funcionalmente (JavaScript - ES6)

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6). En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
No se debe utilizar la _pseudo-variable_ `this`.
A continuación indicamos que harás en cada archivo JavaScript.

#### `src/main.js`

En este archivo escibirás todo el código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones como seleccionar, crear y manipular elementos del DOM y registro de manejadores de eventos (_event listeners_ o _event handlers_).

#### `src/data.js`

Estas funciones, que representan lo que el usuario quiere, deben ser [_funciones puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d) e independientes del DOM.

#### `src/data`

En esta carpeta encontrarás un archivo con la extensión `.json` que utilizarás para cargar la data de los personajes de Harry Potter utilizando [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Historias de Usuario

* El usuario requiere poder visualizar a todos los personajes de Harry Potter mostrando por cada uno de ellos:

  * imagen del personaje.
  * nombre del actor que representa al personaje.
  * nombre del personaje.
  * la especie del personaje.
  * casa a la que pertenece el personaje.
  * la imagen de la insignia de la casa a la que pertenece ese personaje (de ser el caso).
  * edad actual del personaje.
  * el rol del personaje, si es estudiante o parte del staff.

* El usuario requiere poder filtrar a los personajes de Harry Potter por :
  * Género : female, male.
  * Rol : student, staff.
  * Casas : Gryffindor, Slytherin, Ravenclaw, Hufflepuff.

* El usuario requiere poder ordenar la visualización de los personajes de Harry Potter, de manera ascendente y/o descendente considerando la edad actual del personaje.

## Final

* Haz un fork del repositorio y empecemos a planificar lo que realizaremos por cada sprint.

* Recuerda publicarlo en gh-pages.
