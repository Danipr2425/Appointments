Appointments Management App

Este proyecto se trata de una app, para uso de gestión de citas con los clientes para un empresario. Simplemente es como una agenda donde gestionar todas las citas.

Comenzando 🚀
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

## Funcionalidades

- **Gestión de Citas**:
  - Crear nuevas citas con información detallada.
  - Ver todas las citas programadas para el día, la semana, etc.
  - Modificar y eliminar citas.
  
- **Gestión de Clientes**:
  - Visualizar los datos de los clientes.
  - Subir y actualizar fotos de los clientes.

- **Interacción del Usuario**:
  - Los usuarios pueden ver las citas existentes y sus respectivos clientes.
  - Se utiliza la interfaz para subir imágenes de perfil de clientes mediante un `Blob` a la base de datos.

## Tecnologías Utilizadas

- **Frontend**:
  - Angular
  - HTML5, CSS3
  - JavaScript/TypeScript
  
- **Backend**:
  - Node.js
  - Express
  
- **Base de Datos**:
  - MySQL o MongoDB (dependiendo de la implementación)

- **Otras Tecnologías**:
  - Git y GitHub para control de versiones

Instalación 🔧

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-repo.git
    ```

2. Navegar a la carpeta del proyecto:

    ```bash
    cd AppoinmentsManagementApp
    ```

3. Instalar las dependencias del backend:

    ```bash
    cd backend
    npm install
    ```

4. Instalar las dependencias del frontend:

    ```bash
    cd frontend
    npm install
    ```

5. Configurar las variables de entorno (si es necesario). Por ejemplo, en el archivo `.env` del backend:

    ```bash
    DB_HOST=localhost
    DB_USER=usuario
    DB_PASS=contraseña
    DB_NAME=appointmentsDB
    ```

6. Iniciar el servidor:

    ```bash
    npm start
    ```

7. Iniciar el servidor del frontend en otra terminal:

    ```bash
    cd frontend
    ng serve
    ```

    Esto levantará el servidor Angular y podrás acceder a la aplicación en `http://localhost:8100`.

Ejecutando las pruebas con Postman ⚙️

Se adjunta un link para la comprobación del funcionamiento del backend de la aplicación.

https://www.postman.com/daniel-1950/appoinmentsmanagementapp/collection/3hg7tpw/new-collection?action=share&creator=38959236


Con todos estos pasos deberá funcionar la aplicación.

Saludos.
