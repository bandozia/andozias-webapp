import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestsInterceptor } from './shared/services/requests.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FlexLayoutModule,
    CoreModule,
    AuthModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestsInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
