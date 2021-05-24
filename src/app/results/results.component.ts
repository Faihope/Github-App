import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SearchGithubService } from "../search-github.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  user: User ;
  repoDetails = []
  searchgithubservice: SearchGithubService

  constructor(searchgithubservice: SearchGithubService) {
    this.searchgithubservice = searchgithubservice
  }

  ngOnInit() {
    this.user = this.searchgithubservice.user;
    this.repoDetails = this.searchgithubservice.repodata;
  }

}
