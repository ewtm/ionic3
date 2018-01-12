import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  public loader;
  public refresher;
  public isRefreshin : boolean = false;

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
    private movieProvider: MovieProvider,
    public  loadingCtrl: LoadingController
    ) {
  }

  abrirCarregando() {
     this.loader = this.loadingCtrl.create({
      content: "Carregando...",
      //duration: 3000
    });
    this.loader.present();
  }

  fecharCarregando(){
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.carregafilmes();
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert("soma :" + (num1 + num2));

  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshin = true;
    this.carregafilmes();

  }

  carregafilmes(){
    this.abrirCarregando();
    console.log('ionViewDidLoad FeedPage');
    // this.somaDoisNumeros(10 , 99);

    this.movieProvider.getLatestMovies().subscribe(
      data => {
        
        let response = (data as any);
        console.log(response.results);
        this.lista_filmes = response.results;
        this.fecharCarregando();
        if(this.isRefreshin){
          this.refresher.complete();
          this.isRefreshin = false;
        }
      }, error => {
        console.log(error);
        this.fecharCarregando();
        if(this.isRefreshin){
          this.refresher.complete();
          this.isRefreshin = false;
        }
      }
    )
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage,{id : filme.id});
  }

}
