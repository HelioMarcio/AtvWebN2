import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name: String = "";
  password: String = "";

  ngOnInit(): void {
    
  }

  handleClick() {
    console.log("Nome: " + this.name);
    console.log("Senha: " + this.password);
  }

  title = 'tela-primeng';
}
