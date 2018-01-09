import { Injectable } from '@angular/core';

@Injectable()
export class CrudService {

  constructor() { }

  getDados() {
    return ['1', '2'];
  }

}
