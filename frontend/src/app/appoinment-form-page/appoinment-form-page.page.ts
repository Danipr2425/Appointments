import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppoinmentService } from '../service/appoinment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoinment-form-page',
  templateUrl: './appoinment-form-page.page.html',
  styleUrls: ['./appoinment-form-page.page.scss'],
})
export class AppoinmentFormPagePage implements OnInit {

  appoinmentForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private appoinmentService: AppoinmentService,
    private router: Router) {
    this.appoinmentForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])],
      hour: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  submitForm() {
    if (this.appoinmentForm.valid) {
      // Llamamos al servicio para crear la cita
      this.appoinmentService.createAppoinment(this.appoinmentForm.value).subscribe(
        data => {
          console.log("Appointment created!");
          this.appoinmentForm.reset(); // Limpiar formulario después de la creación
          this.router.navigateByUrl("/my-appoinments"); // Redirigir a la página de citas
        },
        error => {
          console.error("Error creating appointment", error);
        }
      );
    } else {
      console.log('Please provide all the required values!');
    }
  }

  getFormControl(field: string) {
    return this.appoinmentForm.get(field);
  }

  gotoHomepage() {
    this.router.navigateByUrl("/home");
  }
}
