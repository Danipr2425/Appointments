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

  createAppoinment(appoinment: any, blob: Blob | null) {
    let formData = new FormData();

    // Asegúrate de que todos los campos del formulario se añaden correctamente al FormData
    formData.append("name", appoinment.name);
    formData.append("date", appoinment.date);
    formData.append("hour", appoinment.hour);

    // Si se ha proporcionado un archivo (imagen), se añade al FormData
    if (blob) {
      formData.append("file", blob, "captured-photo.jpg");
    }

    // Realizar la solicitud POST con los datos del FormData
    return this.httpClient.post(this.endpoint, formData);
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
