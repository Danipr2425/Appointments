import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppoinmentService } from '../service/appoinment.service';
import { Router } from '@angular/router';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-appoinment-form-page',
  templateUrl: './appoinment-form-page.page.html',
  styleUrls: ['./appoinment-form-page.page.scss'],
})
export class AppoinmentFormPagePage implements OnInit {

  appoinmentForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private appoinmentService: AppoinmentService,
    private photoService: PhotoService,
    private router: Router) {
    this.appoinmentForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])],
      hour: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.appoinmentForm.valid) {
      console.log('Please provide all the required values!')
      return;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      // Aquí pasamos el formulario junto con la imagen (blob)
      this.appoinmentService.createAppoinment(this.appoinmentForm.value, blob).subscribe(data => {
        console.log("Appointment created with photo!");

      // Limpiar los datos del formulario después de crear la cita
      this.appoinmentForm.reset();  // Resetea todos los valores del formulario
      this.capturedPhoto = "";  // Limpiar la foto capturada

        this.router.navigateByUrl("/my-appoinments");
      }, error => {
        console.error("Error creating appointment", error);
      });
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

  getFormControl(field: string) {
    return this.appoinmentForm.get(field);
  }

  gotoHomepage() {
    this.router.navigateByUrl("/home");
  }
}
