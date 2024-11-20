import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  // Asegúrate de importar Observable
import { Appoinment } from '../models/appoinment.model';  // Asegúrate de importar el modelo Appoinment

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  private previousUrl: string = '';  // Variable para almacenar la URL anterior

  endpoint = "http://localhost:8080/api/appoinments"
  serverUrl: any;

  constructor(private httpClient: HttpClient) { }

  getAppoinments() {
    return this.httpClient.get<any[]>(this.endpoint);
  }

  // Crear una cita
  createAppoinment(appointment: any): Observable<any> {
    return this.httpClient.post(this.endpoint, appointment);  // Realiza una solicitud POST al backend
  }

  delete(id: any) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  update(id: number, appoinmentData: any): Observable<any> {
    return this.httpClient.put<any>(`${this.endpoint}/${id}`, appoinmentData);
  }

  // Método para obtener una cita por su ID
  getAppoinmentById(id: number): Observable<Appoinment> {
    return this.httpClient.get<Appoinment>(`${this.endpoint}/${id}`);
  }
}
