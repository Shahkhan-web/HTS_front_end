import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/teacher/update/153`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  generate_ticket(data: any) {
    const req = new HttpRequest('POST', `${this.baseUrl}/farmer/add`, data, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(id: any): Observable<any> {
    const url = `${this.baseUrl}/image/${id}`;

    return this.http.get(url, { ...this.httpOptions, responseType: 'text' }).pipe(
      catchError((error) => {
        return of(null); // return a default value or handle the error in the subscriber
      })
    );
  }

  get_ticket_data(id:any): Observable<any>{
    const url = `${this.baseUrl}/farmer/get/${id}`;

    return this.http.get(url,this.httpOptions)
        
  }
}
