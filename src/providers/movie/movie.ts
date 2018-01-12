import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  
  private baseApiPath = "https://api.themoviedb.org/3";

  private key :string ="https://api.themoviedb.org/3/movie/550?api_key=29f2ea23c82453989f799fe7fd1f9c30";

  private key2 :string = "https://api.themoviedb.org/3/movie/latest?api_key=29f2ea23c82453989f799fe7fd1f9c30&language=en-US";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath+"/movie/popular?api_key="+this.getApiKey());
  }

  getDetailsMovies(filmeId){
    return this.http.get(this.baseApiPath+`/movie/${filmeId}?api_key=`+this.getApiKey());
  }

  getApiKey(): string{
    return "29f2ea23c82453989f799fe7fd1f9c30";
  }

}
