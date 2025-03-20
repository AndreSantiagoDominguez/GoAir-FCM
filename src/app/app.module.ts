import { firebaseConfig } from './auth/authentication';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';
import { NavbarComponent } from './ui/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Inicializamos Firebase
    const app = initializeApp(firebaseConfig);

    // Configuramos el servicio de Firebase Messaging
    const messaging = getMessaging(app);
  }
}
