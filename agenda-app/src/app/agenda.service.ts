import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>('http://localhost:4000/api/users');
  }

  deleteUser(user: User){
    return this.http.delete<any>('http://localhost:4000/api/users/' + user.id);
  }

  newUser(user:User){
    return this.http.post<User>('http://localhost:4000/api/users', user);
  }

  updateUser(user: User){
    return this.http.put<User>('http://localhost:4000/api/users/'+user.id, user);
  }
}
