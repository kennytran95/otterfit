import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { StarsComponent } from './shared/stars/stars.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSizesComponent } from './form-sizes/form-sizes.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, ProductOverviewComponent, StarsComponent, FormSizesComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
