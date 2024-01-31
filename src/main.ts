import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Configure HttpClient to use fetch
fetch('/assets/config.json')
  .then(response => response.json())
  .then(config => {
    platformBrowserDynamic([{ provide: 'config', useValue: config }])
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
