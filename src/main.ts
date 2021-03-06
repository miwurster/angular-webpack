import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

import './scss/app.scss';
import './scss/loader.scss';

if (process.env.ENV === 'production') {
  enableProdMode();
}

if (module['hot']) {
  console.log('Enable hot module replacement (HMR)...');
  module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(AppModule)
                        .then(success => console.log('Bootstrap success'))
                        .catch(error => console.error(error));
