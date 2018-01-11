import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public nomeApp: string = "Feed do Expires";
  public nomeUsuario: string = "Eduardo Mergulhao";
  public dataDia: string = "Janeiro 7,2018";
  public texto: string = "Estou criando um app chamado Expires";

  public object_feed = {
    titulo: "Eduardo Mergulhao",
    data: "Janeiro 8, 2018",
    descricao: "Consumindo Json",
    likes: 12,
    comment: 4,
    time_comment: "11h ago"

  }

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    // this.somaDoisNumeros(10 , 99);

    this.movieProvider.getLatestMovies().subscribe(
      data => {
        
        let response = (data as any);
        console.log(response.results);
        this.lista_filmes = response.results;
        
      }, error => {
        console.log(error);
      }
    )
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert("soma :" + (num1 + num2));

  }

}
