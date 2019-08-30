import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UploadFilesService} from '../../services/upload-files.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  progreso1: number = 25;
  progreso2: number = 50;

  result: any;
  error: any;

  file = {
    name: null,
    fileName: null,
    base64textString: null
  };

  constructor(
    private http: HttpClient,
    private upFiles: UploadFilesService
  ) {}

  ngOnInit() {
  }

  postTest() {
    this.clear();
    console.log('Entrando al evento de getTest :D');
    this.http.post('http://192.168.15.27/rc/raptor/test/request/',
      {'usuario': 'magnnimus', 'password': '123'},
      {headers: {'Content-Type': 'application/json',
                          'X-Fiducia': 'files'}})
      .subscribe(res => {
        console.log('Resultado: ', res);
        this.result = JSON.stringify(res);
      }, err => {
        console.log('Error: ', err);
        this.error = JSON.stringify(err);
      });
  }

  getTest() {
    this.clear();
    this.http.get('http://192.168.15.27/rc/raptor/test/request?usuario=p1&password=123', {
      headers: {'Content-Type': 'application/json'}
      })
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

  /*cambiarValor(val: number) {
    if (this.progreso >= 100 && val > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && val < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + val;
  }*/

  selectFile(event) {
    var files = event.target.fieles;
    var file = files[0];
    this.file.fileName = file.name;
    if(files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  seleccionarArchivo(event) {
    var files = event.target.files;
    var file = files[0];
    this.file.fileName = file.name;

    if(files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded( readerEvent ) {
    var binaryString = readerEvent.target.result;
    this.file.base64textString = btoa(binaryString);
  }

  uploadFile() {
    console.log(this.file);
    this.upFiles.uploadFile(this.file).subscribe(
      data => {
        if(data['resultado'] == 'OK') {
          alert(data['mensaje']);
          console.log('Resultado Subida de archivo: ', data);
        }
      }
    );
  }

  actualizar( event: number ) {
    console.log('Evento', event);
  }

}
