import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crops';
  name = 'Victor';
  age = 31;
  img = 'https://images.unsplash.com/photo-1688591407360-724e6b8cdbee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODg3NTcyMQ&ixlib=rb-4.0.3&q=80&w=1080';
  btnDisable = true;

  products : Product[] = [
    {
      name : 'Tomate Cherry Verde',
      clas : 'Hortaliza',
      guy : 'Verdura',
      price : 1500,
      img : '../assets/images/cherry_verde.png'
    },
    {
      name : 'Tomate Cherry Pinton',
      clas : 'Hortaliza',
      guy : 'Verdura',
      price : 2000,
      img : '../assets/images/cherry_pinton.png'
    },
    {
      name : 'Tomate Cherry Rojo',
      clas : 'Hortaliza',
      guy : 'Verdura',
      price : 2500,
      img : '../assets/images/cherry_rojo.png'
    },
    {
      name : 'Yuca',
      clas : 'Hortaliza',
      guy : 'Verdura',
      price : 1500,
      img : '../assets/images/yuca.png'
    },
    {
      name : 'Lulo',
      clas : 'Arbusto',
      guy : 'Fruta',
      price : 1500,
      img : '../assets/images/lulo.png'
    },
    {
      name : 'Cilantro',
      clas : 'Planta',
      guy : 'hierba',
      price : 500,
      img : '../assets/images/cilantro.png'
    }
  ]
}
