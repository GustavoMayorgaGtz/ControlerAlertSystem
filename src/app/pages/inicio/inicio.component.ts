import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss', './inicio.component.mobile.scss']
})
export class InicioComponent {

  //VARIABLES GLOBALES
  public statusMenu: boolean = true;


  //METODOS
  /**
   * Funcion para cambiar el estado del menu en mobile
   * @param menuContainer contenedor del menu para aplicarle las animaciones de cerrado y abierto
   */
  menu_event(menuContainer: HTMLDivElement): void {
    this.statusMenu = !this.statusMenu;
    if (this.statusMenu) {
      menuContainer.setAttribute("class", "menu-close");
    } else {
      menuContainer.setAttribute("class", "menu-open");
    }
  }

  /**
   * Funcion para aplicar un scroll al hacer click en el boton conocer producto
   * @param primaryContainer Contenedor primario para obtener el tamaño en altura y aplicarle un scroll
   */
  scroll_event(primaryContainer: HTMLDivElement) {

    let height = primaryContainer.getBoundingClientRect().height;

    const idInterval = setInterval(() => {
      if (primaryContainer.scrollTop <= height) {
        primaryContainer.scrollTop = primaryContainer.scrollTop + 4;
      }
      if (primaryContainer.scrollTop >= height) {
        clearInterval(idInterval);
      }
    }, 1)
  }

  /**
   * Funcion para abrir la pagina oficial de controler en facebook
   */
  facebook_event() {
    window.location.href = "https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fcontroler.com.mx";
  }

  /**
   * Funcion para abrir el perfil oficial de instagram de controler
   */
  instagram_event() {
    window.location.href = "https://www.instagram.com/controler.mx/";
  }

  /**
   * Funcion para obtener informacion de schneider_electric
   */
  schneider_electric_event() {
    window.location.href = "https://www.se.com/mx/es/";
  }

  /**
   * Funcion para obtener informacion de ignition
   */
  inductive_automation_event() {
    window.location.href = "https://inductiveautomation.com/";
  }

  /**
   * Funcion para abrir la tienda oficial de controler
   */
  store_event() {
    window.location.href = "https://controler.mx/";

  }
}
