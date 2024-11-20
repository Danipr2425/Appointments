import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appoinment } from '../models/appoinment.model';
import { AppoinmentService } from '../service/appoinment.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  appoinments: Appoinment[] = [];  // Array para almacenar las citas
  todayAppoinments: Appoinment[] = [];  // Array para las citas de hoy


  constructor(private router: Router,private appoinmentService: AppoinmentService) {}

  ngOnInit() {
    this.loadAppoinments();  // Cargar todas las citas cuando se inicia la página
  }

  gotoMyappoinments(){
    this.router.navigateByUrl("/my-appoinments");
  }

  gotoAppoinmentsForm(){
    this.router.navigateByUrl("/appoinment-form-page");
  }

  gotoClients(){
    this.router.navigateByUrl("/my-clients");
  }

  gotoAppoinmentsToday(){
    this.router.navigateByUrl("/my-appoinments-today");
  }

  gotoClientsForm(){
    this.router.navigateByUrl("/client-form-page");
  }

  gotoAppoinmentsWeek(){
    this.router.navigateByUrl("/my-appoinments-week");
  }

// Método para cargar todas las citas y filtrar las de hoy
loadAppoinments() {
  this.appoinmentService.getAppoinments().subscribe((appoinments: any) => {
    console.log(appoinments);  // Verifica que los datos son un array de Appoinments
    this.appoinments = appoinments as Appoinment[];  // Forzar el tipo si es necesario
    this.filterAppoinmentsForToday();
  });
}

// Método para filtrar las citas de hoy
filterAppoinmentsForToday() {
  const today = new Date().toISOString().split('T')[0];  // Obtener la fecha de hoy en formato 'YYYY-MM-DD'
  // Filtra las citas comparando solo la parte de la fecha (ignora la hora y la zona horaria)
  this.todayAppoinments = this.appoinments.filter(a => a.date.split('T')[0] === today); 
}

}
