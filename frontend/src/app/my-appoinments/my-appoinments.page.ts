import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from '../service/appoinment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-appoinments',
  templateUrl: './my-appoinments.page.html',
  styleUrls: ['./my-appoinments.page.scss'],
})
export class MyAppoinmentsPage implements OnInit {

  appoinments: any = [];

  constructor(private appoinmentService : AppoinmentService,private router: Router) { }

  ngOnInit() {
    this.getAllAppoinments();
  }

  gotoHomepage(){
    this.router.navigateByUrl("/home");
  }

  addAppoinment(){
    this.router.navigateByUrl("appoinment-form-page");
  }

  getAllAppoinments(){
    this.appoinmentService.getAppoinments().subscribe(response =>{
      this.appoinments = response;
    })
  }

  deleteAppoinment(id:any){
    this.appoinmentService.delete(id).subscribe(response =>{
      this.getAllAppoinments();
    })
  }

  updateAppoinment(id: any) {
    // Redirigir a la página de actualización pasando el ID de la cita
    this.router.navigateByUrl(`/update-appoinment/${id}`);
    this.getAllAppoinments();
  }

}
