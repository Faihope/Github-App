import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from "../search-github.service";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username?:string;
  searchsithubservice?:SearchGithubService;
  submitUsername(){
    this.searchsithubservice?.newUserData(this.username);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
