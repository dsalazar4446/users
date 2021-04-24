import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
