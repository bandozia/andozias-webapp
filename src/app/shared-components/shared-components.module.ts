import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinerButtomComponent } from './spiner-buttom/spiner-buttom.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [SpinerButtomComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,    
  ],
  exports: [
    SpinerButtomComponent
  ]
})
export class SharedComponentsModule { }
