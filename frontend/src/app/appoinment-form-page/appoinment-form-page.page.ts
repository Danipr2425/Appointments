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
    private router: Router){
      this.appoinmentForm = this.formBuilder.group({
        name: ['',Validators.compose([Validators.required])],
        date: ['',Validators.compose([Validators.required])],
        hour: ['',Validators.compose([Validators.required])]
      })
    }

  ngOnInit() {
  }

  createAppoinment(){
    if(this.appoinmentForm.valid){
      console.log('Formulario válido:',this.appoinmentForm.value);
      this.appoinmentService.create(this.appoinmentForm.value).subscribe(response =>{
        this.router.navigateByUrl("/my-appoinments").then(() => {
          window.location.reload();
        });
      });
    }else{
      console.log('Formulario no válido');
    }
  }

  getFormControl(field: string){
    return this.appoinmentForm.get(field);
  }

  gotoHomepage(){
    this.router.navigateByUrl("/home");
  }
}
