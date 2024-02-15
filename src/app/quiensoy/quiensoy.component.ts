import { Component } from '@angular/core';
import { SobremiService } from '../sobremi.service';
@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrl: './quiensoy.component.css'
})
export class QuiensoyComponent {
jsonData: any;

  constructor(private sobremiService: SobremiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.sobremiService.getData().subscribe(data => {
      this.jsonData = data;
      console.log(data);
    });
  }
}
