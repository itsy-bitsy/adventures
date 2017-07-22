
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { HomeComponent } from './pages/home/home.component';
import { RoutingModule } from './app.routes';
import { IdahoComponent } from './pages/bcs/idaho/idaho.component';
import { UtahComponent } from './pages/bcs/utah/utah.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdahoComponent,
    UtahComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {
  items: MenuItem[];

  ngOnInit() {

    this.items = [
      {
        label: 'Home', icon: 'fa-home',
        routerLink: 'home',

      },
      {
        label: 'Back Country Strips', icon: '',
        items: [
          {
            label: 'Idaho',
            routerLink: '/idaho'
          },
          {
            label: 'Utah',
            routerLink: '/utah'
          }
        ],
      },
      {
        label: 'The Flying Machine', icon: 'fa-plane',
        routerLink: '/'
      },
      {
        label: 'Camping', icon: '',
      },

      {
        label: 'About',
      }

    ];
  }

}


