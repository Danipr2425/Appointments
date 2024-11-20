import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../service/client.service';  // Asegúrate de crear este servicio
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.page.html',
  styleUrls: ['./update-client.page.scss'],
})
export class UpdateClientPage implements OnInit {

  isSubmitted: boolean = false;
  clientForm: FormGroup;  // Formulario reactivo para el cliente
  clientId: any;
  capturedPhoto: string | Blob = "";

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,  // Servicio para clientes
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) {
    // Inicializamos el formulario con un campo "name"
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Obtenemos el ID del cliente desde la URL
    this.activatedRoute.paramMap.subscribe((params) => {
      this.clientId = +params.get('id')!; // Convertimos el `id` a un número
      console.log('ID del cliente:', this.clientId);  // Depuración
      this.loadClientData(this.clientId);  // Cargar datos del cliente
    });
  }

  // Método para cargar los datos del cliente a editar
  loadClientData(id: number) {
    this.clientService.getClientById(id).subscribe((client) => {
      if (client) {
        console.log('Datos del cliente cargados:', client);
        // Llenamos el formulario con los datos del cliente
        this.clientForm.patchValue({
          name: client.name,
        });
        // Verificar si existe el 'filename' y construir la URL para la imagen
        if (client.filename) {
          // La URL de la imagen se construye correctamente apuntando a la carpeta 'public/images'
          this.capturedPhoto = `http://localhost:8080/images/${client.filename}`;
          console.log('URL de la imagen:', this.capturedPhoto);
        } else {
          // Si no hay filename, asignar la imagen por defecto (avatar vacío)
          this.capturedPhoto = 'http://localhost:8080/images/avatarvacio.jpg';  // O cualquier URL de una imagen por defecto
        }
      }
    });
  }

  // Método para obtener el control del formulario y mostrar errores
  getFormControl(field: string) {
    return this.clientForm.get(field);
  }

  // Redirigir a la página principal
  gotoHomepage() {
    this.router.navigateByUrl("/home");
  }

  async takePhoto() {
    const data = await this.photoService.takePhoto();
    if (data && data.webPath) {  // Asegúrate de que data.webPath está definido
      // Creamos una URL temporal para la imagen
      this.capturedPhoto = data.webPath;  // La URL tipo blob que se puede usar para mostrar la imagen
      console.log('Foto capturada:', this.capturedPhoto);  // Para depuración
    }
  }
  
  async pickImage() {
    const data = await this.photoService.pickImage();
    if (data && data.webPath) {  // Asegúrate de que data.webPath está definido
      // Creamos una URL temporal para la imagen
      this.capturedPhoto = data.webPath;  // La URL tipo blob que se puede usar para mostrar la imagen
      console.log('Imagen seleccionada:', this.capturedPhoto);  // Para depuración
    }
  }
  
  async updateClient() {
    this.isSubmitted = true;
    if (!this.clientForm.valid) {
      console.log('Formulario no válido');
      return;
    }
  
    let blob: Blob | null = null;
  
    // Si la imagen es un URL de tipo blob:
    if (this.capturedPhoto && typeof this.capturedPhoto === 'string' && this.capturedPhoto.startsWith('blob:')) {
      console.log('Foto capturada, utilizando el Blob...');
      const response = await fetch(this.capturedPhoto);  // Obtenemos el Blob a partir de la URL del Blob
      blob = await response.blob();  // Convertimos la imagen a un Blob
    } else if (this.capturedPhoto && this.capturedPhoto instanceof Blob) {
      // Si es un Blob directamente
      console.log('Foto capturada, utilizando el Blob...');
      blob = this.capturedPhoto;  // Usamos directamente el Blob
    } else if (this.capturedPhoto) {
      // Si la imagen es una URL externa
      console.log('Usando la URL externa de la imagen...');
      const response = await fetch(this.capturedPhoto);  // Usamos la URL de la imagen
      blob = await response.blob();  // Convertimos la imagen a Blob
    } else {
      // Si no hay foto, usamos una imagen predeterminada
      console.log('Usando imagen predeterminada');
      const defaultImagePath = 'assets/images/avatarvacio.jpg';
      const response = await fetch(defaultImagePath);  // Usamos la imagen predeterminada
      blob = await response.blob();  // Convertimos la imagen predeterminada a un Blob
    }
  
    // Crear el FormData
    const formData = new FormData();
    formData.append('name', this.clientForm.value.name);
  
    // Agregar la imagen al FormData si el Blob está presente
    if (blob) {
      formData.append('file', blob, 'client-photo.jpg');  // Cambia el nombre si es necesario
    }
  
    try {
      // Enviar la solicitud de actualización y suscribirse al Observable
      this.clientService.updateClient(this.clientId, formData).subscribe({
        next: (response) => {
          console.log("Cliente actualizado con éxito!", response);
          this.clientForm.reset();
          this.capturedPhoto = "";  // Limpiar la foto capturada
          this.router.navigate(['/my-clients']);
        },
        error: (error) => {
          console.error("Error al actualizar el cliente", error);
          alert("Hubo un error al actualizar el cliente. Intenta nuevamente.");
        }
      });
    } catch (error) {
      console.error("Error al intentar actualizar el cliente", error);
      alert("Hubo un error al intentar actualizar el cliente. Intenta nuevamente.");
    }
  }

  discardImage() {
    // Usamos un Blob vacío como marcador de que no hay foto
    this.capturedPhoto = 'assets/images/avatarvacio.jpg';  // Usamos la imagen por defecto (si es una URL estática)
  }
}