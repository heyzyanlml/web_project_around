# Tripleten web_project_around

## 🌟 Descripción del Proyecto y su Funcionalidad
Bienvenido a "Alrededor de los EE.UU.", uno de mis proyectos del Bootcamp de Web Development de Tripleten. Aquí, pondré en práctica los conocimientos recién adquiridos de algunos de mis sprints sobre HTML, CSS, JavaScript y más tecnologías que vaya aprendiendo, creando una página web interactiva y atractiva.

🎯 Objetivo del Proyecto
El objetivo de este proyecto es desarrollar tus habilidades trabajando con HTML, CSS y JS simultáneamente. Crearás una página web responsiva donde los usuarios pueden añadir, eliminar y dar "me gusta" a las fotos, implementando cuadros emergentes funcionales y editando dinámicamente la información de la página.

Se trabajó sobre los siguientes breakpoints:

- 1280px
- 880px
- 320px

<img width="837" alt="image" src="https://github.com/heyzyanlml/web_project_around/assets/166194594/a1a78ccd-e386-4cce-b1c0-6065b4691d57">

## 🌐 Características del Proyecto

### 🖼️ Las Seis Tarjetas Iniciales
Al cargar la página, aparecerán seis tarjetas iniciales. Utiliza JavaScript para añadirlas a la página. Las fotos y los nombres de las tarjetas están definidos en un array.

### 📝 Formulario para Añadir una Tarjeta
El proyecto incluye un formulario para añadir nuevas tarjetas. Este formulario se abre al hacer clic en el botón "+", y se cierra al hacer clic en "Cerrar".

### ➕ Agregar una Tarjeta
Los usuarios pueden agregar tarjetas personalizadas escribiendo un nombre y añadiendo un enlace a una imagen. Al hacer clic en "Guardar", la nueva tarjeta aparece al inicio del contenedor de tarjetas y el formulario emergente se cierra automáticamente.

### ❤️ El Botón de "Me Gusta"
Cada tarjeta tiene un botón de "Me gusta". Al hacer clic, el corazón cambia de color, permitiendo a los usuarios expresar su aprecio por las fotos.

### 🗑️ Eliminar una Tarjeta
Las tarjetas incluyen un icono de "Eliminar" que permite a los usuarios borrar las tarjetas no deseadas con un simple clic.

### 🔍 Ventana Emergente de Imágenes
Al hacer clic en una imagen, se abre una ventana emergente con una vista ampliada de la imagen. Esta ventana se puede cerrar haciendo clic en el botón "Cerrar".

### 📝 Validar el Formulario "Editar Perfil"
Valida el formulario "Editar perfil". Para hacerlo, necesitarás preparar los elementos de los mensajes de error conforme al diseño de Figma.

La validación debe funcionar de la siguiente manera:

- Ambos campos son obligatorios.
- El campo "Nombre" debe contener entre 2 y 40 caracteres.
- El campo "Acerca de" debe contener entre 2 y 200 caracteres.
- Utiliza los mensajes de error por defecto del navegador.
- Si algún campo no pasa la validación, el botón "Guardar" debe estar inactivo. Si ambos campos pasan la validación, debe estar activo. Emplea los colores del diseño para los botones inactivos.

### 📝 Validación del Formulario "Nuevo Lugar"
Este paso es similar al anterior salvo algunas diferencias. El campo de enlace no necesita ser verificado en cuanto a la longitud del texto. En su lugar, es necesario comprobar si se ha introducido una URL válida:

- Ambos campos son obligatorios.
- El campo "Título" debe contener entre 2 y 30 caracteres.
- El campo "URL de la imagen" debe contener una URL.
- Utiliza los mensajes de error por defecto del navegador.
- Si algún campo no pasa la validación, el botón "Guardar" debe estar inactivo. Si ambos campos pasan la validación, entonces debe estar activo. Los colores del botón inactivo son los mismos que los del formulario "Editar perfil".

### 🖱️ Cerrar la Ventana Emergente Haciendo Clic en la Superposición
Programa una función que permita a los usuarios cerrar la ventana emergente haciendo clic en la superposición, es decir, en cualquier lugar fuera de los bordes de la ventana emergente.

### ⌨️ Cerrar la Ventana Emergente Pulsando Esc
Programa una función que permita a los usuarios cerrar la ventana emergente pulsando la tecla Esc.

### 🚀 Integración de Webpack y Técnicas Avanzadas
- Configuración de Webpack para el empaquetado (bundling) y creación (building) del proyecto.
- Transpilación y minificación de CSS y JS para optimizar el rendimiento.
- Hacer el código compatible con navegadores obsoletos mediante Webpack.

### ✨ Aplicación de Programación Orientada a Objetos (POO)
- Creación de las clases Section, Popup, PopupWithForm, PopupWithImage, y UserInfo para gestionar diferentes funcionalidades.
- Uso de desestructuración de JavaScript para escribir código más conciso y limpio.
- Implementación de acoplamiento débil para combinar clases de manera efectiva.

## 🛠️ Tecnologías y Técnicas Utilizadas
- **CSS**: Estiliza el proyecto con técnicas avanzadas como media queries y medidas relativas.
- **HTML**: Estructura el proyecto usando etiquetas semánticas y la metodología BEM.
- **JavaScript**: Añade funcionalidad dinámica y manipulación del DOM.
- **Figma**: Transforma diseños en código.
- **Webpack**: Empaqueta, transpila y minifica el código CSS y JS.
- **Puntos de Fuga**: Asegura que la página no se desborde en diferentes resoluciones.

## 🌈 Conocimientos Aplicados
Gracias a este proyecto, he podido:

- Reforzar habilidades de HTML y CSS.
- Aprender más sobre Diseño Responsivo.
- Solucionar errores de diseño en diferentes puntos de fuga.
- Manipular HTML y CSS mediante JavaScript.
- Corregir bugs y errores en el código JS.
- Utilizar ramas de Git para mantener diferentes versiones del código y corregir errores.
- Implementar la funcionalidad de abrir y cerrar ventanas emergentes para imágenes, formularios y otros elementos interactivos.
- Controlar eventos del DOM como el envío de formularios, clics en botones, y la gestión de clases CSS dinámicamente.
- Utilizar plantillas HTML y clonarlas dinámicamente con JavaScript para generar contenido repetitivo.
- Implementar el comportamiento de botones interactivos como "Me gusta" y "Eliminar" tarjetas.
- Configurar y utilizar Webpack para empaquetar y optimizar el proyecto.
- Escribir código JS más conciso utilizando la sintaxis de desestructuración.
- Crear e integrar clases específicas utilizando principios de Programación Orientada a Objetos (POO).
- Implementar técnicas avanzadas de modularización del código y manejo de dependencias.
- Mejorar la experiencia de usuario mediante transpilación y minificación del código.

---
Ingresa al proyecto haciendo clic aquí: [Alrededor de los EE.UU.](https://heyzyanlml.github.io/web_project_around/)


