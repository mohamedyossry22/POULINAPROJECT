import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    // Corrected provideHttpClient configuration
    provideHttpClient({
      useFactory: withFetch,
      deps: [HttpClient],  // Add the appropriate dependency (HttpClient in this case)
    }),

    // Add other providers as needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
