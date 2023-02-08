import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { map, Subject } from 'rxjs';
import { ExampleToolService } from 'src/app/services/example-tool.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-tool1',
  templateUrl: './tool1.component.html',
  styleUrls: ['./tool1.component.css']
})
export class Tool1Component implements OnInit, AfterViewInit{
  endDate = "2023/02/04"
  startDate = ""
  displayedColumns: string[] = ['date', 'result', 'description'];
  dataSource : any = []
  chartOptions: ChartOptions = {
    series: [],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      // categories: ["2023/01/28", "2023/01/29", "2023/01/30", "2023/01/31", "2023/02/01", "2023/02/02"]
    }
  }

  chartDataAvailable: Subject<any> = new Subject()

  @ViewChild("chart") chart!: ChartComponent;

  constructor(private exampleToolService: ExampleToolService) {
    let initDate = new Date()
    initDate.setDate(new Date(this.endDate).getDate() - 7)
    this.startDate = initDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit',
    })
    const splDate = this.startDate.replaceAll(" ", "").split('.')
    this.startDate = `${splDate[0]}/${splDate[1]}/${splDate[2]}`
  }

  ngOnInit(): void {
    this.exampleToolService.getTableData(this.startDate, this.endDate)
    .pipe(
      map((res) => {
        this.dataSource = res
      })
    )
    .subscribe()
  }

  ngAfterViewInit(): void {
    //fazer isso aqui pro get graph data ao inves de table data
    this.exampleToolService.getGraphData(this.startDate, this.endDate)
    .pipe(
      map((res) => {
        let data: any = []
        data = res
        console.log(data)
        this.chartOptions.xaxis = {
          categories: data.map((e: { date: any; }) => e.date).filter((v: any, i: any, a: string | any[]) => a.indexOf(v) === i)
        }
        this.chartOptions.series = [
          {
            name: "PASS",
            data: data.filter((e: { testResult: string; }) => e.testResult === 'PASS').map((v: { count: any; }) => v.count)
          },
          {
            name: "FAIL",
            data: data.filter((e: { testResult: string; }) => e.testResult === 'FAIL').map((v: { count: any; }) => v.count)
          }
        ]
        this.chartDataAvailable.next(true)
      })
    )
    .subscribe()

  }
  
}
