import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { User } from "./user";
import { Repository } from "./repository";

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
  user: User | undefined;
  repository: Repository | undefined;
  repodata = [];

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
    let promise =new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response =>{
        this.user!.bio = response.bio;
        this.user!.public_repos = response.public_repos;
        this.user!.login = response.login;
        this.user!.avatar_url = response.avatar_url;
        this.user!. created_at = response. created_at;
resolve()

      },
      error=>{
        reject(error)
      })
      this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
        
      })
    })
    
  }
}
