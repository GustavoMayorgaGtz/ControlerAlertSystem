import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {




  facebook_event(){
    window.location.href = "https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fcontroler.com.mx";
  }
  instagram_event(){
    window.location.href = "https://www.instagram.com/controler.mx/";
  }

  schneider_electric_event(){
    window.location.href = "https://www.se.com/mx/es/";
  }
  inductive_automation_event(){
    window.location.href = "https://inductiveautomation.com/";
  }

  store_event(){
    window.location.href = "https://controler.mx/";
    
  }

}
