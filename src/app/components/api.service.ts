import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://api.themoviedb.org/3';
  apiKey = '?api_key=5e64fc93b2397e056367ed5e6cca6d21';

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<any> {
    return this.http.get<any>(this.url+'/movie/popular'+this.apiKey);
  }

  public getTvSeries(): Observable<any> {
    return this.http.get<any>(this.url+'/tv/popular'+this.apiKey);
  }

  public getDetails(id:number): Observable<any> {
    return this.http.get<any>(this.url+'/movie/'+id+this.apiKey);
  }

  public getDetailsTvSeries(id:number): Observable<any> {
    return this.http.get<any>(this.url+'/tv/'+id+this.apiKey);
  }

  public getMovieTrailer(id:number): Observable<any>{
    return this.http.get<any>(this.url+'/movie/'+id+'/videos'+this.apiKey);
  }

  public getTvsTrailer(id:number): Observable<any>{
    return this.http.get<any>(this.url+'/tv/'+id+'/videos'+this.apiKey);
  }

  // public getMoviesImage(): Observable<any>{
  //   const url = 'https://api.themoviedb.org/3/movie/images?api_key=5e64fc93b2397e056367ed5e6cca6d21'
  //   return this.http.get<any>(url);
  // }
}