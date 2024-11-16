import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appoinment } from '../models/appoinment.model';
import { AppoinmentService } from '../service/appoinment.service';

@Component({
  selector: 'app-my-appoinments-week',
  templateUrl: './my-appoinments-week.page.html',
  styleUrls: ['./my-appoinments-week.page.scss'],
})
export class MyAppoinmentsWeekPage implements OnInit {

  appoinments: Appoinment[] = [];  // Array para almacenar las citas
  weekAppoinments: Appoinment[] = [];  // Array para las citas de hoy

  constructor(private router: Router, private appoinmentService: AppoinmentService) { }

  ngOnInit() {
    this.loadAppoinments(); 
  }

  gotoHomepage() {
    this.router.navigateByUrl("/home");
  }

// Método para cargar todas las citas y filtrar las de esta semana
loadAppoinments() {
  this.appoinmentService.getAppoinments().subscribe((appoinments: any) => {
    console.log(appoinments);  // Verifica que los datos son un array de Appoinments
    this.appoinments = appoinments as Appoinment[];  // Forzar el tipo si es necesario
    this.filterAppoinmentsForWeek();
  });
}

// Método para filtrar las citas de esta semana
filterAppoinmentsForWeek() {
  const today = new Date();
  
  // Obtener el primer día de la semana (lunes)
  const firstDayOfWeek = new Date(today);
  const dayOfWeek = today.getDay();  // Día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;  // Si hoy es domingo (0), retrocedemos 6 días, si no, retrocedemos para llegar al lunes
  firstDayOfWeek.setDate(today.getDate() + diffToMonday);  // Ajustar la fecha al lunes de la semana

  // Obtener el último día de la semana (domingo)
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);  // Añadir 6 días al lunes para llegar al domingo
  
  // Formatear las fechas a 'YYYY-MM-DD'
  const startOfWeek = firstDayOfWeek.toISOString().split('T')[0];
  const endOfWeek = lastDayOfWeek.toISOString().split('T')[0];

  console.log('Inicio de la semana:', startOfWeek);
  console.log('Fin de la semana:', endOfWeek);

  // Filtrar las citas que están dentro de este rango
  this.weekAppoinments = this.appoinments.filter(a => {
    const appoinmentDate = a.date.split('T')[0];  // Obtener solo la fecha sin la hora
    return appoinmentDate >= startOfWeek && appoinmentDate <= endOfWeek;
  });
  
  console.log('Citas de esta semana:', this.weekAppoinments);
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
