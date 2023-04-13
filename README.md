# Presentación prueba Lydia Vega
### Prueba a realizar:
![prueba](/client/src//img/Gr%C3%A1fico_pegado-3.png)

### Links de interés:
- [Visualizar mi curriculum.](./client//public/Curriculum-lydia-vega.FullStack.pdf)
- [Perfil de LinkedIn.](https://www.linkedin.com/in/lydia-vega/)
- [Perfil de GitHub.](https://github.com/lyvegama)
- [Repositorio con el proyecto de la prueba ténica.](https://github.com/lyvegama/test-sigaus)


### Inicialización del proyecto:
Para inicializar el proyecto abrir la terminal y escribir los siguientes comandos:
Con éste se clonará de GitHub mi repositorio de la prueba.
```
git clone https://github.com/lyvegama/test-sigaus.git
```
Nos introduciremos en dicha carpeta:
```
cd test-sigaus 
```
Instalaremos las extensiones y librerías contenidas en él.
```
npm install 
```
Ahora podremos inicializarlo con:
```
npm start 
```
Se abrirá el navegador en [http://localhost:3000](http://localhost:3000) y podrá visualizarse la página.

Si se quisiera compilar Sass recomiendo usar la terminal de *bash*. Primero nos introduciremos en la carpeta contenedora **/test-sigaus/client/src**. Y ejecutaremos el siguiente comando:
```
sass --watch sass:css
```
### Tecnología usadas:
* react: 18.2.0
* react-dom: 18.2.0
* react-router-dom: 6.10.0 
* react-scripts: 5.0.1
* web-vitals: 2.1.4
* sass: 1.61.0

*No he querido usar librerías o framework como **Bootstrap**, **React-Bootstrap** o **Tailwind**  para hacer componentes, para poder demostrar que puedo hacerlos desde cero. También sé codificar con ellos.*

### Lista de características:

- [x] Componentes reutilizables.
- [x] Sistema de rutas. 
- [x] Archivos *.scss*.  
- [x] Resolución *900px*.  
- [x] Repositorio en Git Hub.

**Extras**
- [x] Función filtrar la tabla por meses dinámicamente (Explicada a continuación)
- [x] Capacidad visualizar y descargar PDF's.

### Funcionalidad principal:
##### Filtrar los meses en  la tabla.
Archivo **Filtrado.js** en la carpeta *client/src/components/Content/Filtrado.js*.

Nos creamos un json llamado **const months** con los valores que figuran en la tabla de la imagen original. En él añadimos una propiedad al elemento HTML llamada *sinta* que usaremos a posteriori para hacer la búsqueda y coincidencia entre el button del mes que el cliente selecciona, y el json que tenemos guardado con la información de cada mes, llamado *tabla.js* que se encuentra en *client/src/data/tabla.js*.
Una vez haga click en el *button* con la función **selectMonth**, en él, mediante el método **.filter()**, crearemos un nuevo array con los json del mes que el cliente indique.
Una vez creado ese array lo guardaremos en un estado llamado **setMes** que a continuación en el *return* del componente, mediante el método **.map()** renderizaremos.


### Uso de variables globales, código reutilizable y diseño:

| Descripción        | Código      |         
|---------------------------|-------|---
| Variables sass |   *$light-beige*    |         
| Uso de variables anidadas      |   *$shadow: 1px 1px 7px -3px \$dark-gray;*    |  
| Importaciones de estilos | *@import './pages/declaraciones.scss';* 
| Uso de fuentes externas | *@font-face {font-family:'Signika';src: url('../../public/fonts/Signika-VariableFont_wght.ttf');}* |
| Uso de FlexBox | *display: flex;justify-content: flex-end;* |

