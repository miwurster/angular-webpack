import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Crisis } from '../shared/model/crisis.model';

@Injectable()
export class CrisisService {

  private basePath = 'api/crisis';

  private static handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  findAll(): Promise<Crisis[]> {
    return this.http.get(this.basePath)
               .toPromise()
               .then(response => response.json().data as Crisis[])
               .catch(CrisisService.handleError);
  }
}
