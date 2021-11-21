# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Comentarios

Algunos comentarios y detalles sobre la entrega final.

### Diferencias con la maqueta

No tenía el font utilizado en la maqueta a disposición, y dado el tiempo limitado por llevar a cabo toda la integración, 
preferí concentrarme en lo importante en lugar de reclamar el archivo o la referencia. Opté por el sans-serif sistema.

De igual manera, en los archivos proporcionados, no venía incluido el patrón de "manchas / estrellas" presente en la mayoría de las pantallas
de la maqueta. De no encontrar un equivalente muy rápido, escogí dedicarme a las tareas con más prioridad y por ello, 
no se puede apreciar esta decoración en mi integración.

Por fin, hay un par de elementos (gratuitos) que saqué del internet, así como un par de soluciones CSS para modificar o reemplazar 
unas imagenes proporcionadas. 

### Instrucciones / Sign-up Flow

Obviamente, no está implementado el servicio que envia un código SMS, y por lo tanto tampoco es dinámica la verificación del código.
Para las finalidades de esta prueba, el único código válido es 337801, sacado de la maqueta. Sin embargo, las informaciones ingresadas
(nombre, apellido, teléfono) sí son integradas al estado de la app. No hay mucho interés en guardar las informaciones para esta demostración,
pero sí es "future-proof" en el sentido en que el objeto de datos podría servir para agregar/actualizar la información relevante en una base de
datos, por tomar el ejemplo más lógico.

### Validación de los inputs

Usé React-Hook-Form para implementar la validación de los datos, lo cual me permite tanto bloquear el acceso al etapa siguiente e indicar 
los errores en caso de no ser válido el contenido de los inputs, como beneficiar del styling nativo de los campos inválidos para una mejor 
accesibilidad y UX en su globalidad. El cambio de campo inválido a válido en "tiempo real" ocurre únicamente si se ha tratado de procesar 
el formulario con uno o más errores. De igual manera, los detalles de los errores aparecen al momento de procesar el formulario.

### De haber tenido más tiempo..

Definitivamente me parecería importante extraer otros cuantos subcomponentes en algunas partes con tal de tener una mejor visibilidad.
De igual manera, me hubiera gustado implementar nested routing para que los etapas de inscripción se integren correctamente dentro de la navegación
y se vean reflejados en el URL.


