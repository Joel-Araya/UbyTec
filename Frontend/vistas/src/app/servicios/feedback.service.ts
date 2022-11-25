import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feedback } from '../feedback/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getFeedback():  Observable<Feedback[]>{
    let direccion = environment.apiUrl2 + "/Feedback";
    return this.http.get<Feedback[]>(direccion);
  }
}
