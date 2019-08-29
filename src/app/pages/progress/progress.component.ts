import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  progreso: number = 50;

  result: any;
  error: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getTest() {
    this.clear();
    console.log('Entrando al evento de getTest :D');
    this.http.post('http://192.168.15.27/rc/raptor/test/request',
      {'usuario': 'magnanimus', 'password': '123'},
      {headers: {'Content-Type': 'application/json'}})
      .subscribe(res => {
        console.log('Resultado: ', res);
        this.result = JSON.stringify(res);
      }, err => {
        console.log('Error: ', err);
        this.error = JSON.stringify(err);
      });
  }

  clear() {
    this.result = null;
    this.error = null;
  }

  cambiarValor(val: number) {
    if (this.progreso >= 100 && val > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && val < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + val;
  }

}
