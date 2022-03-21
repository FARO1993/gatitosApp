import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
/*import { AuthModule } from './auth/auth.module';*/
import { GatosModule } from './gatos/gatos.module';

//Cambiar el locale de la app
import localeEs from "@angular/common/locales/es-AR";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localeEs );


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 /*   AuthModule,*/
    GatosModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es-AR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
