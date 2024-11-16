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
    return this.httpClient.get(this.endpoint);
  }

  create(appoinment: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.append("name", appoinment.name);
    body.append("date", appoinment.date);
    body.append("hour", appoinment.hour);

    return this.httpClient.post(this.endpoint, body.toString(), { headers });
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
