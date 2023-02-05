import { Component } from '@angular/core';

@Component({
  selector: 'app-tool1',
  templateUrl: './tool1.component.html',
  styleUrls: ['./tool1.component.css']
})
export class Tool1Component {
  displayedColumns: string[] = ['date', 'result', 'description'];
  dataSource = [
    {
      date: "04/02/2023",
      testResult: "PASS",
      description: "Random Test"
    }
  ]
}
