import { Component } from '@angular/core';
import { EntradasblogService } from '../entradasblog.service';

@Component({
  selector: 'app-blogeninicio',
  templateUrl: './blogeninicio.component.html',
  styleUrl: './blogeninicio.component.css'
})
export class BlogeninicioComponent {
jsonData2: any;

  constructor(private entradasblogService2: EntradasblogService) { }

  ngOnInit(): void {
    this.getData2();
  }

  getData2() {
    this.entradasblogService2.getData().subscribe(data2 => {
      this.jsonData2 = data2;
      console.log(data2);
    });
  }
}
