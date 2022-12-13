import { NgModule } from '@angular/core';
import { ProductOverviewComponent } from './product-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSizesComponent } from '../form-sizes/form-sizes.component';

@NgModule({
  declarations: [FormSizesComponent],
  imports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [ProductOverviewComponent],
})
export class ProductOverviewModule {}
