import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {enableProdMode} from '@angular/core';
platformBrowserDynamic()
	.bootstrapModule( AppModule);
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
