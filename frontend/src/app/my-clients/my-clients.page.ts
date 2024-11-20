import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';  // Importar el servicio de clientes
import { Router } from '@angular/router';  // Importar el Router para la navegación
import { Client } from '../models/client.model';  // Importar el modelo de cliente

@Component({
  selector: 'app-my-clients',
  templateUrl: './my-clients.page.html',
  styleUrls: ['./my-clients.page.scss'],
})
export class MyClientsPage implements OnInit {

  clients: Client[] = [];  // Inicializar el arreglo de clientes

  constructor(
    private clientService: ClientService,  // Inyectar el servicio de clientes
    private router: Router  // Inyectar el router para navegar entre páginas
  ) {}

  // Método que se ejecuta cuando se inicia la página
  ngOnInit() {
    this.getAllClients();// Obtener la lista de todos los clientes
  }

  // Método para obtener todos los clientes desde el servicio
  getAllClients() {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients; // Asignar los clientes a la variable local
    });
  }

  // Método para eliminar un cliente
  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(() => {
      this.getAllClients();  // Recargar la lista de clientes después de eliminar uno
    });
  }

  // Método para redirigir a la página de agregar cliente
  addClient() {
    this.router.navigateByUrl('/client-form-page');  // Navegar a la página de agregar cliente
  }

  // Método para redirigir a la página de editar un cliente
  updateClient(id: number) {
    this.router.navigateByUrl(`/update-client/${id}`);  // Navegar a la página de editar cliente con el ID correspondiente
  }

  gotoHomepage(){
    this.router.navigateByUrl("/home");
  }
}