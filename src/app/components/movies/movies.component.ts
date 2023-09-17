import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies:any = [];
  //images:any = '';

  constructor(private apiService: ApiService, private router:Router) {
  }

  ngOnInit(){
    this.moviesData();
    //this.movieImageData();
  }

  public moviesData(){
    this.apiService.getMovies().subscribe(response =>{
      this.movies = response.results;
      //console.log(response.results);
      //console.log(this.movies)

      // for(let movie in response){
      //   newArray.push(movie);
      //   console.log(newArray,'test');
      //   return newArray;
      // }

      this.movies.forEach((movie:any) => {
        //console.log(movie);
      });

      //console.log(this.movies,'test');
      return response;
    })
  }


  public navigateToMovies(id:any){
    this.router.navigate(['movie-details', id])
  }

  // public movieImageData(){
  //     this.apiService.getMoviesImage().subscribe(response =>{
  //       this.images = response;
  //       console.log(response);
  //       console.log(this.images);
  //       this.images.forEach((image:any) => {
  //         console.log(image);
  //       });
  //       console.log(this.images,'image');
  //       return response;
  //   })
  // }
}
