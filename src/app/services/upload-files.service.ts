import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  URL = 'http://192.168.15.27/rc/raptor/test/request/';

  constructor(
    private http: HttpClient
  ) { }

  uploadFile( file ) {
    return this.http.put(this.URL, file, {
      headers: {'X-Fiducia': 'files'}
    });
  }

}
