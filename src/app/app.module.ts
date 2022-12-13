import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { StarsComponent } from './shared/stars/stars.component';

@NgModule({
  declarations: [AppComponent, ProductOverviewComponent, StarsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
