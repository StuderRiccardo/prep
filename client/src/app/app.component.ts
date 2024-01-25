import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = {}
  constructor(private http:HttpClient){
    this.http.get('https://5000-studerriccardo-prep-29mm60ovqwj.ws-eu107.gitpod.io/simple_json').subscribe(
      (data) => {this.data = data}
      
    )
  }
}
