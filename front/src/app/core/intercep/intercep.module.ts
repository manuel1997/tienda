import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'

import { IntercepService } from './intercep.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:IntercepService,
      multi:true
    }
  ],
})
export class IntercepModule { }
