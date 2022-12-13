import { NgModule } from '@angular/core';
import { FormSizesComponent } from './form-sizes.component';
import { ProductDataService } from '../services/product-data.service';
import { ProductStylesService } from '../services/product-styles.service';
import { RelatedService } from '../services/related.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [ProductDataService, ProductStylesService, ProductStylesService],
  bootstrap: [FormSizesComponent],
})
export class ProductOverviewModule {}
