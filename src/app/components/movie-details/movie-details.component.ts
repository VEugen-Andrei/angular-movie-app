import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class DetailsComponent {

  movieDetails:any = [];
  routeSub:Subscription | undefined;
  movieTrailer:any = [];
  urlTrailer:any = '';

  constructor(private apiService: ApiService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params =>{
      console.log(params);
      console.log(params['id']);
      this.apiService.getDetails(params['id']).subscribe(response =>{
        this.movieDetails = response;
        //console.log(this.movieDetails);
        return this.movieDetails;
      })
      this.apiService.getMovieTrailer(params['id']).subscribe(response =>{
        this.movieTrailer = response;
        this.urlTrailer = 'https://www.youtube.com/embed/'+this.movieTrailer.results[0].key;
        const iframe = document.getElementById("trailer") as HTMLIFrameElement;
        iframe.src = this.urlTrailer;
        // console.log('url', this.urlTrailer);
        // console.log(this.movieTrailer);
        return this.movieTrailer;
      })
    })
  }
}