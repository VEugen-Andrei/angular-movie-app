import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent {

  tvseries:any = [];

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(){
    this.tvSeriesData();
    console.log(this.router);
  }

  public tvSeriesData(){
    this.apiService.getTvSeries().subscribe(response =>{
      this.tvseries = response.results;
      //console.log('tvseries',response);
      this.tvseries.forEach((tvserie:any) => {
        //console.log(tvserie);
      });
      return response;
    })
  }

  public navigateToSeries(id:any){
    this.router.navigate(['tvs-details', id]);
  }

}
