import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tvs-details',
  templateUrl: './tvs-details.component.html',
  styleUrls: ['./tvs-details.component.css']
})
export class TvsDetailsComponent {
  tvsDetails:any = [];
  routeSub:Subscription | undefined;
  tvsTrailer:any = [];
  urlTrailer:any = '';

  constructor(private apiService: ApiService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
      this.apiService.getDetailsTvSeries(params['id']).subscribe(response =>{
        this.tvsDetails = response;
        console.log('tvsdetails',this.tvsDetails);
        return this.tvsDetails;
      })
      this.apiService.getTvsTrailer(params['id']).subscribe(response =>{
        this.tvsTrailer = response;
        this.urlTrailer = 'https://www.youtube.com/embed/'+this.tvsTrailer.results[0].key;
        const iframe = document.getElementById("trailer") as HTMLIFrameElement;
        iframe.src = this.urlTrailer;
        //console.log('url', this.urlTrailer);
        return this.tvsTrailer;
      })
    })
  }
}
