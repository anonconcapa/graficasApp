import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html'
})
export class BarrasDobleComponent implements OnInit {

  proveedoresData: any[] = [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    
  ];
  

  proveedoresLabels: any[] =['2021', '2022','2023','2024','2025'];
  
  productoData: any[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
