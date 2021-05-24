import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from "../search-github.service";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username:string;
  searchgithubservice:SearchGithubService;
  submitUsername(){
    this.searchgithubservice.getUser(this.username);
    this.searchgithubservice.getRepos(this.username);
  }
  constructor(searchgithubservice:SearchGithubService) { 
    this.searchgithubservice= searchgithubservice
  }

  ngOnInit(): void {
  }

}
