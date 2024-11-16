import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppoinmentService } from '../service/appoinment.service';

@Component({
  selector: 'app-update-appoinment',
  templateUrl: './update-appoinment.page.html',
  styleUrls: ['./update-appoinment.page.scss'],
})
export class UpdateAppoinmentPage implements OnInit {

  appoinmentForm: FormGroup;
  appoinmentId: any;

  constructor(
    private formBuilder: FormBuilder,
    private appoinmentService: AppoinmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // Inicializamos el formulario
    this.appoinmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      hour: ['', Validators.required],
    });
  }

  previousUrl: string = '';

  ngOnInit() {
    // Obtenemos el ID de la cita desde la URL y lo convertimos a número
    this.activatedRoute.paramMap.subscribe((params) => {
      this.appoinmentId = +params.get('id')!; // Convertir el `id` a number usando el operador `+`
      console.log('ID de la cita:', this.appoinmentId); // Para depuración
      this.loadAppoinmentData(this.appoinmentId); // Cargar los datos de la cita
    });
  }

  // Cargar los datos de la cita desde el servicio
  loadAppoinmentData(id: number) {
    this.appoinmentService.getAppoinmentById(id).subscribe((appoinment) => {
      if (appoinment) {
        console.log('Datos de la cita cargados:', appoinment);
        // Llenamos el formulario con los datos de la cita
        this.appoinmentForm.patchValue({
          name: appoinment.name,
          date: appoinment.date,
          hour: appoinment.hour
        });
      }
    });
  }

  // Método para actualizar la cita
  updateAppoinment() {
    if (this.appoinmentForm.valid) {
      const updatedAppoinment = {
        ...this.appoinmentForm.value,
        date: new Date(this.appoinmentForm.value.date).toISOString().split('T')[0]
      };
  
      // Llamamos al servicio para actualizar la cita
      this.appoinmentService.update(this.appoinmentId, updatedAppoinment).subscribe(
        (response) => {
          console.log('Cita actualizada correctamente:', response);

          // Redirigir a la URL anterior
          this.router.navigateByUrl("/my-appoinments").then(() => {
            window.location.reload();  // Recargar la página si es necesario
          });
        },
        (error) => {
          console.error('Error al actualizar la cita:', error);
          alert('Error al actualizar la cita. Intenta nuevamente.');
        }
      );
    } else {
      console.log('Formulario no válido');
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  // Obtener control de formulario para mostrar errores
  getFormControl(field: string) {
    return this.appoinmentForm.get(field);
  }

  gotoHomepage() {
    this.router.navigateByUrl("/home");
  }

}