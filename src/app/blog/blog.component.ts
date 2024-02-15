import { Component } from '@angular/core';
import { EntradasblogService } from '../entradasblog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
    jsonData: any;

  constructor(private entradasblogService: EntradasblogService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.entradasblogService.getData().subscribe(data => {
      this.jsonData = data;
      console.log(data);
    });
  }
}
