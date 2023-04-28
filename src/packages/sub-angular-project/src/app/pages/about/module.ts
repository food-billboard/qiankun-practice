import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';

import { Component } from './component';


@NgModule({
  imports: [RoutingModule],
  declarations: [Component],
  exports: [Component]
})
export class Module { }
