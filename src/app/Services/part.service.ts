import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Part } from 'your-part-interface'; // Replace with your actual part interface
import { Observable } from 'rxjs';
import { Part } from '../model/part.interface';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  // Define the API endpoint (URL) for interacting with parts
  private readonly partsUrl: string = 'api/parts';

  constructor(private http: HttpClient) {}

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>('api/parts');
  }

  getPartsUser(id:number): Observable<Part[]> {
    return this.http.get<Part[]>('api/parts/user/'+id);
  }

  getPart(id: string): Observable<Part> {
    return this.http.get<Part>(`${this.partsUrl}/${id}`);
  }

  createPart(part: Part): Observable<Part> {
    return this.http.post<Part>('api/parts/createPart', part);
  }

  updatePart(part: Part): Observable<Part> {
    return this.http.put<Part>('api/parts/'+part.id, part);
  }

  deletePart(id: string): Observable<any> { // Replace with relevant response type
    return this.http.delete(`${this.partsUrl}/${id}`);
  }
}
