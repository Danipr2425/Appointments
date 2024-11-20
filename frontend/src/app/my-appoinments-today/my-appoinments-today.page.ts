import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appoinment } from '../models/appoinment.model';
import { AppoinmentService } from '../service/appoinment.service';

@Component({
  selector: 'app-my-appoinments-today',
  templateUrl: './my-appoinments-today.page.html',
  styleUrls: ['./my-appoinments-today.page.scss'],
})
export class MyAppoinmentsTodayPage implements OnInit {

  appoinments: Appoinment[] = [];  // Array para almacenar las citas
  todayAppoinments: Appoinment[] = [];  // Array para las citas de hoy

  constructor(private router: Router, private appoinmentService: AppoinmentService) { }

  ngOnInit() {
    this.loadAppoinments();  // Cargar todas las citas cuando se inicia la página
}

  gotoHomepage() {
    this.router.navigateByUrl("/home");
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
    // Filtrar las citas comparando solo la fecha (ignorando la hora y la zona horaria)
    this.todayAppoinments = this.appoinments.filter(a => a.date.split('T')[0] === today);
  }

  deleteAppoinment(id:any){
    this.appoinmentService.delete(id).subscribe(response =>{
      this.loadAppoinments();
    })
  }

  updateAppoinment(id: any) {
    // Redirigir a la página de actualización pasando el ID de la cita
    this.router.navigateByUrl(`/update-appoinment/${id}`);
    this.loadAppoinments();
  }
}
