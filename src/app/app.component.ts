import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-movie-app';

  constructor(private router:Router) {
  }

  public goToPopularMovies= () =>{
    this.router.navigateByUrl("/app-movies")
  }

  public goToTVSeries = () => {
    this.router.navigateByUrl("/app-tv-series")
  }

  public details = () => {
    this.router.navigateByUrl("/app-details")
  }

  public tvsDetails = () => {
    this.router.navigateByUrl("/app-tvs-details")
  }

  ngOnInit() {
    
  }


}
