import { Component } from '@angular/core';
import { PancartasService } from '../pancartas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
jsonData: any;

  constructor(private pancartasService: PancartasService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.pancartasService.getData().subscribe(data => {
      this.jsonData = data;
      console.log(data);
    });
  }
}
