import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Repository } from "./repository";

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
  user: User 
  repository: Repository;
  repodata = [];
  newUserData:any = [];

  constructor(private http: HttpClient) {
    this.user = new User("", 0, "", "", new Date)
    this.repository = new Repository("", "", new Date, "", "")
  }
  getUser(username: string) {
    interface ApiResponse {
      bio: string,
      public_repos: number,
      login: string,
      avatar_url: String,
      created_at: Date
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(Response => {
        this.user.bio = Response.bio;
        this.user.public_repos = Response.public_repos;
        this.user.login = Response.login;
        this.user.avatar_url = Response.avatar_url;
        this.user.created_at = Response.created_at;
        resolve()

      },
        error => {
          reject(error)
        })
      this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(Response => {
        for (let i = 0; i < Response.lenght; i++) {
          this.newUserData = new Repository(Response[i].name, Response[i].description, Response[i].updated_at, Response[i].clone_url, Response[i].language);
        this.repodata.push(this.newUserData);
        
        }
        resolve()
      },
      error => {
        reject(error)
      })
    })
return promise;
  }
}
