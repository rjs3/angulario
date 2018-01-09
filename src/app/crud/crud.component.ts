import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent  {

nomeDados;
dados;


constructor(private crudService: CrudService) {
  this.nomeDados =  'Rodrigo Santos';
  this.dados = crudService.getDados();
}


}
