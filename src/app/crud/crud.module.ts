import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { CrudService } from './crud.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrudComponent],
  exports: [CrudComponent],
  providers: [CrudService]
})
export class CrudModule { }
