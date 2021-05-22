import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { User } from "./user";
import { Repository } from "./repository";

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
  user: User | undefined;
  repository:Repository | undefined;
  repodata=[];

  constructor(private http:HttpClient) {
    this.user=new User("",0,"","", new Date)
   }
}
