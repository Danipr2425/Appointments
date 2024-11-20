import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../service/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form-page',
  templateUrl: './client-form-page.page.html',
  styleUrls: ['./client-form-page.page.scss'],
})
export class ClientFormPagePage implements OnInit {

  clientForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private clientService: ClientService,
    private photoService: PhotoService,
    private router: Router) {
    // Inicializando el formulario con validaciones
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required]  // Solo 'name' como campo de ejemplo
    });
  }

  ngOnInit() {
  }

  getFormControl(field: string) {
    return this.clientForm.get(field);
  }


  async submitForm() {
    this.isSubmitted = true;
  
    // Verificar si el formulario es válido
    if (!this.clientForm.valid) {
      console.log('Formulario no válido, por favor complete todos los campos!');
      return;
    } else {
      let blob = null;
  
      // Si hay una foto capturada, convertirla en un Blob
      if (this.capturedPhoto !== "") {
        console.log('Foto capturada, convirtiendo a blob...');
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      } else {
        console.log('No se capturó ninguna foto, usando foto predeterminada.');
        // Si no hay foto capturada, usar la foto predeterminada
        const defaultImagePath = 'assets/images/avatarvacio.jpg';
        const response = await fetch(defaultImagePath);
        blob = await response.blob();
      }
  
      // Crear un objeto con los datos del formulario
      const clientData = {
        name: this.clientForm.value.name  // Añadir el nombre del cliente
      };
  
      try {
        // Crear el cliente utilizando el servicio
        await this.clientService.createClient(clientData, blob);
        console.log("Cliente creado con éxito!");
  
        // Limpiar el formulario después de crear el cliente
        this.clientForm.reset();
        this.capturedPhoto = "";  // Limpiar la foto capturada
  
        // Redirigir a la página de clientes
        this.router.navigate(['/my-clients']);
      } catch (error) {
        console.error("Error al crear el cliente", error);
        alert("Hubo un error al crear el cliente. Intenta nuevamente.");
      }
    }
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath ? data.webPath : "";
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = "";
  }

  gotoHomepage() {
    this.router.navigateByUrl("/home");
  }
}
