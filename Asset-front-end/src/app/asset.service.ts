import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  getAsset() {
    return this.http.get(`${this.uri}/assets`);
  }

  getWeather(): Observable<any> {
    return this.http.get(`${this.uri}/graph`);
  }

  getAssetById(id) {
    return this.http.get(`${this.uri}/assets/${id}`);
  }

  addAsset(deviceName, responsible, description, department) {
    const asset = {
      deviceName: deviceName,
      responsible: responsible,
      description: description,
      department: department
    };
    return this.http.post(`${this.uri}/assets/add`, asset);

  }
  
  updateAsset(deviceName, responsible, description, department, status, Id) {
    const asset = {
      deviceName: deviceName,
      responsible: responsible,
      description: description,
      department: department,
      status: status,

    }
    return this.http.post(`${this.uri}/assets/update/${Id}`, asset);

  }

  deleteAsset(id) {
    return this.http.get(`${this.uri}/assets/delete/${id}`)

  }
}
