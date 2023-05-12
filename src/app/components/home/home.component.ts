import { Component, OnInit } from '@angular/core';
import { HomeService } from "@app/services/home/home.service";
import { Stats } from "@app/models/stats";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stats = {} as Stats

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getStats().subscribe(response => {
        this.stats = response
      },
      (error) => {
        console.log(error)
      },
      () => {
      }
      )
  }

}
