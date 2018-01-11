import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let config_key_name ="config";

@Injectable()
export class ConfigProvider {

  public config = {
    showSlide: false,
    name: "",
    username: ""

  }

  constructor(public http: HttpClient) {
    console.log('Hello ConfigProvider Provider');
  }

  //Recupera
  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }

  //Grava
  setConfigData(showSlide: boolean, name: string, username: string) {
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }
    if(name){
      config.name = name;
    }
    if(username){
      config.username = username;
    }

    localStorage.setItem(config_key_name,JSON.stringify(config))

  }

}
