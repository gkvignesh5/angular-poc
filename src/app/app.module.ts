import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { SearchComponent } from './search/search.component';
import { OffersComponent } from './offers/offers.component';
import { ProductsComponent } from './products/products.component';
import { EventsComponent } from './events/events.component';
import { PlansDevicesNetworksComponent } from './plans-devices-networks/plans-devices-networks.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    SearchComponent,
    OffersComponent,
    ProductsComponent,
    EventsComponent,
    PlansDevicesNetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
