import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@interfaces';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root',
})
export class UserService {
  path: string;
  constructor(private http: HttpClient) {
    this.path = `${environment.api.url}:${environment.api.port}/${environment.api.prefix}/${environment.api.route.users}`;
  }

  list(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(this.path);
  }

  detail(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.path}/${id}`);
  }

  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.path, user);
  }

  update(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.path}/${user.idUser}`, user);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.path}/${id}`);
  }
}
