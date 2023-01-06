import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html'
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal:boolean = false;

  @Input() inputData : ChartData[] = [];
  @Input() inputLabels : ChartData[] = [];

  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,

    scales: {
      x: {},
      y: {},
    },
    plugins: {
      legend: {
        display: true, // para tener la leyenda si o no
      },
    },
    indexAxis: 'x',
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [

  ];

  public barChartData: ChartData<'bar' | any> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      // {data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#2E97EB', hoverBackgroundColor: '#EB4B31'},
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#3A35F2', hoverBackgroundColor: '#EB4B31' },
      // { data: [ 13, 50, 22, 86, 60, 19, 100 ], label: 'Series C', backgroundColor:'#9E3BDB', hoverBackgroundColor: '#EB4B31' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData.datasets[0].data = [
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100), ];

  //     this.barChartData.datasets[1].data = [
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100), ];

  //       this.barChartData.datasets[2].data = [
  //         Math.round(Math.random() * 100),
  //         Math.round(Math.random() * 100),
  //         Math.round(Math.random() * 100),
  //         Math.round(Math.random() * 100),
  //         Math.round(Math.random() * 100),
  //         Math.round(Math.random() * 100),
  //         Math.round(Math.random() * 100), ];

  //   this.chart?.update();
  // }






  constructor() { }

  ngOnInit(): void {

    if(this.horizontal){
      this.barChartOptions!.indexAxis = 'y';
    }

    this.barChartData.labels = this.inputLabels;
    this.barChartData.datasets = this.inputData;
  }


}
