import './publicPath'
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if(!(window as any).__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err))
}

if (environment.production) {
  enableProdMode();
}

const lifecycle = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule)
  },
  template: '',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = async (config: any) => {
  console.log('the angular project is bootstrap');
  return (lifecycle.bootstrap as any)(config);
}
export const mount = async (config: any) => {
  console.log('the angular project is mount');
  return (lifecycle.mount as any)(config);
}
export const unmount = async (config: any) => {
  console.log('the angular project is unmount');
  return (lifecycle.unmount as any)(config);
}
