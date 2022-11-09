import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
})
export class ListaArticulosComponent implements OnInit {
  titulo: string = 'Lista de Artículos';
  articulos: any[] = [
    {
      id: 2,
      descripcion: 'Articulo X',
      codigo: 'xsd-143',
      cantidad: 139,
      precio: 1221.4,
      puntaje: 4,
      imagen: 'https://cdn-icons-png.flaticon.com/512/1621/1621782.png',
      lowprice:
        'https://preview.redd.it/y97uvshubwu71.jpg?auto=webp&s=1b8c8bc0cee08d5a8d005eaefb89a229428c4ec2',
    },
    {
      id: 5,
      descripcion: 'Articulo Y',
      codigo: 'dlg-912',
      cantidad: 336,
      precio: 400.99,
      puntaje: 3,
      imagen: 'https://img.icons8.com/ios/500/sad.png',
      lowprice:
        'https://preview.redd.it/y97uvshubwu71.jpg?auto=webp&s=1b8c8bc0cee08d5a8d005eaefb89a229428c4ec2',
      highprice:
        'https://i.pinimg.com/474x/2f/30/45/2f3045a36e93aacaaf0fa58ab9fada6b.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}

  incrementoPrecio(art: any) {
    art.precio += 100;
  }
  decrementoPrecio(art: any) {
    art.precio -= 100;
  }
}
