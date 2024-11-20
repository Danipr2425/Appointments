import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private endpoint = 'http://localhost:8080/api/clients';  // URL de la API de clientes

  constructor(private httpClient: HttpClient) { }

  // Obtener todos los clientes
  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.endpoint);
  }

  // Obtener un cliente por ID
  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.endpoint}/${id}`);
  }

  // Crear un nuevo cliente
  createClient(client: any, blob: Blob | null): Promise<any> {
    let formData = new FormData();
  
    // Asegúrate de que todos los campos del formulario se añaden correctamente al FormData
    formData.append("name", client.name);
  
    // Si se ha proporcionado un archivo (imagen), se añade al FormData
    if (blob) {
      formData.append("file", blob, "client-photo.jpg");
    }
  
    // Realizar la solicitud POST con los datos del FormData
    return this.httpClient.post(this.endpoint, formData).toPromise();
  }

  updateClient(clientId: number, formData: FormData): Observable<any> {
    const url = `http://localhost:8080/api/clients/${clientId}`;
    return this.httpClient.put(url, formData);  // Debería devolver un Observable
  }
  
  // Eliminar un cliente
  deleteClient(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}