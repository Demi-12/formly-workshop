# Workshop: Desarrollo de Formularios Dinámicos con Formly


## Workflow

1. Cada lider del equipo deberá hacer un fork de este proyecto en Github
2. Añadirá como colaboradores a los diferentes miembros del equipo y estos aceptaran la invitación.
3. Los miembros del equipo deberan acceder a https://stackblitz.com/github/<<nombre_cuenta_lead>>/<<nombre_repositorio>> habiéndose logado con su cuenta de github.
4. Desde la pantalla de desarrollo accederán a Dashboard <img width="345" alt="image" src="https://github.com/user-attachments/assets/0d90c470-29ba-46e8-8ed6-625d9790e83b" />
5. Una vez en el dashboard seleccionaremos el repositorio de nuestro lead <img width="435" alt="image" src="https://github.com/user-attachments/assets/48b7a38e-363a-46b6-84c9-f0dcf7f75072" />
6. Desde la terminal crearemos nuestra feature (git checkout -b feature/<<nombre_branch>>) e iremos desarrollando nuestro cambios. <img width="562" alt="image" src="https://github.com/user-attachments/assets/ab6dd427-1709-4b81-b8c8-a61e89131208" />
8. Al teminar el desarrollo haremos commit o pull request pulsando el bóton azul de la parte superior izquierda
9. Desde Github Se mergearán las ramas de las diferentes secciones y se hara una prueba en conjunto del formulario
10. El formulario deberá cumplir con todos los requisitos. Todos los requerimientos bonus finalizados serán valorados positivamente

> El proyecto tiene ya instalado Angular Material 16 [https://material.angular.dev/](https://v16.material.angular.dev/) . Puedes utilizar los elementos nativos de HTML o importar los de Material (exceptuando en aquellos ejercicios donde sea obligatorio utilizar material). Tambien incluye por defecto bootstrap https://getbootstrap.com/docs/5.3/getting-started/introduction/



## Caso Práctico

Desde **Santander SCIB**, se nos ha solicitado desarrollar una herramienta para registrar los bugs que se producen en los diferentes proyectos tecnológicos. Dado que el alta de incidencias requiere manejar información variable y validaciones complejas, hemos decidido utilizar **Formly** para simplificar el desarrollo.

El cliente ha solicitado un formulario dividido en **5 secciones**: **Informador**, **Detalles**, **Entorno**, **Prioridad** y **Adjuntos**. A continuacion se detallan los requisitos de cada seccion:

---

> Todos los campos y propiedades acompañados de **(Bonus)** son tareas secundarias. Asegúrate primero de acabar tu sección. Una vez finalizada, realiza las tareas bonus. Al final del documento encontrarás tareas opcionales por si aún te sigue sobrando tiempo.

> Comprobarás que ciertos campos bonus de las secciones 4 y 5 dependen de los valores seleccionados en la sección 3. Por lo que hasta que no se integren todos las features deberás simular un valor por defecto


## Requerimientos del Formulario

### **1. Informador** 

Esta sección incluye los siguientes campos:

- **Número de empleado**:

  - **Type**: Texto.

  - **Required**: Sí.

  - **Validación (BONUS)**: Mínimo 3 caracteres y debe empezar por una 'N' o 'X' .

- **Rol del informador**:

  - **Type**: Select.

  - **Required**: Sí.

  - **Options**: Se recuperará la lista de roles de un servicio que contiene la funcion (`getRoles`).

- **Asignar responsable**:

  - **Type**: Select.

  - **Required**: Sí, si el Rol no es igual a QA.

  - **Ocultar y resetear valor**: Si el Rol es igual a QA.

  - **Options**: Se deberá mostrar la siguiente lista de opciones:`[n1111, n2222]`.

  - **Readonly**: Si el Número de empleado coincide con alguna de las opciones.

  - **Valor**: Si el Número de empleado es igual a `n1111` o `n2222` se rellenará con uno de estos valores.
    
- **Email (BONUS)**:

  - **Type**: Texto.

  - **Required**: Sí.

  - **Validación**: Se requiere una validación, el texto introducido debe terminar en (`@gruposantander.es`).

- **Tipo de empleado (BONUS)**:

  - **Type**: Text.

  - **Oculto**: Sí **Número de empleado** no es un valor valido.

  - **Readonly**: Si **Número de empleado** valido.

  - **Valor**: Si **Número de empleado** empieza por N el valor será igual a `Interno` si no `Externo`

---

### **2. Detalles** 

Esta sección incluye los siguientes campos:

- **Título**:

  - **Type**: Texto.

  - **Required**: Sí.

  - **Validación (BONUS)**: Mínimo 3 caracteres.

- **Descripción del bug**:

  - **Type**: Text-area.

  - **Required**: No.

  - **Validación**: Mínimo 50 caracteres.

  - **Mensaje de error personalizado**: “Se requiere al menos <<nºletras>> caracteres”.

  - **Nota** Crea un nuevo tipo de campo customizado llamado "text-area" con Formly usando el componente input Angular Material

- **Geografía**:

  - **Type**: Select.

  - **Required**: Sí.

  - **Readonly**: Si el switch **SCIB Global** está activado.

  - **Options**: `[ES, GB, PT, GLOBAL]`.

  - **Preasignar valor**: `GLOBAL` si el switch **SCIB Global** está activado.
 
- **Pasos para reproducirlo (BONUS)**:

  - **Type**: Text-area.

  - **Required**: Sí.

  - **Validación**: Mínimo 100 caracteres.

  - **Mensaje de error personalizado**: “Se requiere al menos <<nºletras>> caracteres”.

  - **Nota** Reutiliza el typo "text-area" creado en el paso anterior

---

### **3. Entorno** 

Esta sección incluye los siguientes campos:

- **Aplicación**:

  - **Type**: Texto.

  - **Required**: Sí.
    
  - **Preasignar valor**: `GLOBAL` si el switch **SCIB Global** está activado.

- **Entorno**:

  - **Type**: Select.

  - **Required**: Sí.

  - **Options**: `[PRO, PRE, DEV]`.

- **Categoría**:

  - **Type**: Select.

  - **Disabled**: Hasta que se seleccione un valor en Entorno.

  - **Readonly**: Si el entorno es `DEV`.

  - **Options**:

    - Si Entorno es `PRO`: `[CAT A, CAT B]`.

    - Si Entorno es `DEV`: Asignar valor `None`.

    - Si Entorno es `PRE`: `[CAT C, CAT D]`.

- **Cliente (BONUS)**:

  - **Type**: Switch.

  - **Valor por defecto**: Activado.

  - **Nota**: Crea un nuevo tipo de campo customizado llamado "switch" con Formly usando el componente Slide toggle de Angular Material

---

### **4. Prioridad** 

Esta sección incluye los siguientes campos:

- **Severidad**:

  - **Type**: Select.

  - **Required**: Sí.

  - **Options**: `[Grave, Medio, Bajo]`.

  - **Readonly**: TRUE si el switch **SCIB Global** está activado.
    
  - **Readonly (Bonus)**: TRUE Si es una aplicación **cliente**, el Entorno es **PRO** y **SCIB Global** está activado.

  - **Autocompletar valor**: `Grave` si es una aplicación cliente y el Entorno es `PRO`.

- **Prioridad**:

  - **Type**: Select.

  - **Disabled**: Hasta que se complete el campo **Severidad**.

  - **Required**: Sí.

  - **Options**:

    - Si Severidad es `Grave`: `[Alta, Muy alta]`.

    - Si Severidad no es `Grave`: `[Alta, Muy alta, Media, No prioritario]`.

- **Notificar a equipo**:

  - **Type**: Checkbox.

  - **Oculto**: TRUE Si Prioridad no es igual a `Alta` o `Muy alta`.

  - **Valor por defecto**: Activado.

  - **Nota**: Crea un nuevo tipo de campo customizado llamado "Checkbox" con Formly usando el componente Checkbox de Angular Material

---

### **5. Información Adicional** 

En esta seccion el usuario a pedido que el formulario se divida en dos acordeones.
En el primer acordeón el titulo será "Documentación", al desplegarse aparecerán los campos **Adjuntos** y **Número de adjuntos**
Es obligatorio crear un wrapper con Formly llamado "acordeon", usando el componente Expansion Panel de Angular Material
(BONUS) En un segundo acordeón se mostrará el titulo "Extra", al desplegarse aparecerá el campo **Enlace**.

- **Adjuntos**:

  - **Type**: Checkbox.

  - **Required**: Sí.

  - **Valor por defecto**: Activado.

  - **Nota**: Crea un nuevo tipo de campo customizado llamado "Checkbox" con Formly usando el componente Checkbox de Angular Material

- **Número de adjuntos**:

  - **Type**: Texto numérico.

  - **Oculto**: Si el checkbox **Adjuntos** está desactivado.

  - **Required**: Si el checkbox **Adjuntos** está activado.
    
  - **Preasignar valor (Bonus)**: `1` si el switch **SCIB Global** está activado.

  - **Validaciones**:

    - Mayor que 0.

    - Menor que 4.

  - **Mensajes de error**:

    - Si supera el máximo: “El máximo de adjuntos permitidos es 4”.

    - Si es menor que 1: “El mínimo de adjuntos es 1”.

- **Enlace (BONUS)**:

  - **Type**: Texto.

  - **Required**: Si el Entorno es `PRO`.

  - **Validación**: Debe comenzar con `https://`.

  - **Mensaje de error**: “URL no válida”.

---

## Opcional

- Todos los campos requeridos deben mostrar el mensaje: **“Campo requerido”** si no son validos

- Se ha incluido el boton **reset**, al finalizar todas las acciones se debera incluir la logica de Formly que permite resetear el valor de los formularios
  
- Si el switch **SCIB Global** está activado, todos los inputs deben tener un color rojo; de lo contrario, azul

- Utilizar el servicio de traducciones para que los label de cada campo cambien segun en idioma seleccionado

- La maquetación tambien sera evaluada positivamente

¡Manos a la obra! 🚀

---

