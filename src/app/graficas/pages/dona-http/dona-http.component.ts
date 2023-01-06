import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType, ChartEvent } from 'chart.js';


@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHttpComponent implements OnInit {

  

   // Doughnut
  public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' 
  ];

  public doughnutChartDatasets: number[] =[];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
        data:[],
        backgroundColor: [
          '#08FAC8',
          '#06A4F5',
          '#075DDE',
          '#03FA89'
        ]}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

    // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


  constructor( private graficasService : GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe( data => {
    //   console.log(data);

    //   const labels = Object.keys(data);
    //   const datas = Object.values(data);

    //   this.doughnutChartData = {
    //     labels: labels,
    //     datasets: [{
    //         data:datas,
    //         backgroundColor: [
    //           '#08FAC8',
    //           '#06A4F5',
    //           '#075DDE',
    //           '#03FA89'
    //         ]}
    //     ]

    this.graficasService.getInformacionRedesSociales()
    .subscribe(({labels, values}) =>{

        this.doughnutChartData = {
        labels: labels,
        datasets: [{
            data:values,
            backgroundColor: [
              '#08FAC8',
              '#06A4F5',
              '#075DDE',
              '#03FA89'
            ]}
        ]}

    })

      }

      // this.doughnutChartLabels = labels;

      // console.log(this.doughnutChartLabels); 

      // this.doughnutChartDatasets = datas;

      // console.log(this.doughnutChartDatasets); 

      
  


        };


